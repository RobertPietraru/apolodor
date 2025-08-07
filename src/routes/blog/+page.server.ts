import { getLocale } from '$lib/paraglide/runtime';
import { articles } from '$lib/server/data/articles';
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

export const load = async ({ url }) => {
	const locale = getLocale();
	const search = url.searchParams.get('q');
	const sort = url.searchParams.get('sort');
	const filters = url.searchParams.getAll('category');
	// Mock news data


	let filteredNews = articles;

	if (search) {
		filteredNews = articles.filter((item) => item.title[locale].toLowerCase().includes(search.toLowerCase()) || item.excerpt[locale].toLowerCase().includes(search.toLowerCase()));
	}

	if (sort) {
		filteredNews = filteredNews.sort((a, b) => {
			if (sort === 'newest') {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			}
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});
	}
	if (filters.length > 0) {
		filteredNews = filteredNews.filter((item) => filters.includes(item.category));
	}

	return {
		articles: filteredNews.map((item) => ({
			...item,
			category: getCategory(item),
			title: item.title[locale],
			excerpt: item.excerpt[locale]
		})),
		totalArticleCount: articles.length
	};
};
