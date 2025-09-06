import { allGuests } from '$lib/server/data/guests';
import { articles, featuredArticleIds } from '$lib/server/data/articles';
import { getLocale } from '$lib/paraglide/runtime.js';
import * as m from '$lib/paraglide/messages';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';

 function getHomeMetadata(locale: string): PageMetadata {
	return getBaseMetadata(locale);
}

function getCategory(item: typeof articles[number]['category']) {
	if (item === 'program') {
		return m.blog_category_program();
	}
	if (item === 'guests') {
		return m.blog_category_guests();
	}
	if (item === 'workshops') {
		return m.blog_category_workshops();
	}

	if (item === 'news') {
		return m.blog_category_news();
	}
	return item;
}

export async function load() {
	const locale = getLocale();
	const featuredArticles = featuredArticleIds.map((id) => articles.find((item) => item.id === id)).filter((item) => item !== undefined).map((item) => ({
		...item,
		category: getCategory(item.category),
		title: item.title[locale],
		excerpt: item.excerpt[locale],
		image: item.image[locale],
		content: item.content[locale]
	}));

	const translatedGuests = allGuests.map((guest) => ({
		...guest,
		content: guest.content[locale]
	}));

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
