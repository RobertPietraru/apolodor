import { allGuests } from '$lib/server/data/guests';
import { articles } from '$lib/server/data/articles';
import { getLocale } from '$lib/paraglide/runtime.js';
import { m } from '$lib/paraglide/messages';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';

 function getHomeMetadata(locale: string): PageMetadata {
	return getBaseMetadata(locale);
}

function getCategory(item: typeof articles[number]) {
	if (item.category === 'program') {
		return m.blog_category_program();
	}
	if (item.category === 'guests') {
		return m.blog_category_guests();
	}
	if (item.category === 'workshops') {
		return m.blog_category_workshops();
	}
	return item.category;
}

export async function load() {
	const locale = getLocale();
	const featuredArticles = articles.filter((item) => item.featured).map((item) => ({
		...item,
		category: getCategory(item),
		title: item.title[locale],
		excerpt: item.excerpt[locale]
	}));
	const translatedGuests = allGuests.map((guest) => ({
		...guest,
		content: guest.content[locale]
	}));

	console.log({
		writers: translatedGuests.filter((guest) => guest.role === 'writer').length,
		illustrators: translatedGuests.filter((guest) => guest.role === 'illustrator').length,
		singers: translatedGuests.filter((guest) => guest.role === 'singer').length,
		moderators: translatedGuests.filter((guest) => guest.role === 'moderator').length,
	})
	return {
		guests: {
			writers: translatedGuests.filter((guest) => guest.role === 'writer'),
			illustrators: translatedGuests.filter((guest) => guest.role === 'illustrator'),
			singers: translatedGuests.filter((guest) => guest.role === 'singer'),
			moderators: translatedGuests.filter((guest) => guest.role === 'moderator'),
		},
		articles: featuredArticles,
		metadata: getHomeMetadata(locale)
	};
}
