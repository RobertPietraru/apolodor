import { landingPageGuests } from '$lib/server/data/guests';
import { articles } from '$lib/server/data/articles';
import { getLocale } from '$lib/paraglide/runtime.js';
import { m } from '$lib/paraglide/messages';
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

	return {
		guests: landingPageGuests,
		articles: featuredArticles
	};
}
