import { getLocale } from '$lib/paraglide/runtime';
import { articles } from '$lib/server/data/articles';
import { m } from '$lib/paraglide/messages';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';

function getBlogMetadata(locale: string): PageMetadata {
	const base = getBaseMetadata(locale);
	
	return {
		...base,
		title: `${m.meta_blog_title()} | ${base.title}`,
		description: m.meta_blog_description(),
		ogTitle: m.meta_blog_title(),
		ogDescription: m.meta_blog_description()
	};
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

export async function load({ url }) {
	const locale = getLocale();
	
	// Get URL parameters for search/filter
	const query = url.searchParams.get('q') || '';
	const category = url.searchParams.get('category') || 'all';
	const sort = url.searchParams.get('sort') || 'newest';

	// Process articles
	let processedArticles = articles.map((item) => ({
		...item,
		category: getCategory(item),
		title: item.title[locale],
		image: item.image[locale],
		excerpt: item.excerpt[locale]
	}));

	// Apply filters
	if (query) {
		processedArticles = processedArticles.filter(
			(article) =>
				article.title.toLowerCase().includes(query.toLowerCase()) ||
				article.excerpt.toLowerCase().includes(query.toLowerCase())
		);
	}

	if (category !== 'all') {
		processedArticles = processedArticles.filter((article) => article.category === category);
	}

	// Apply sorting
	processedArticles.sort((a, b) => {
		switch (sort) {
			case 'oldest':
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			case 'az':
				return a.title.localeCompare(b.title);
			case 'za':
				return b.title.localeCompare(a.title);
			default: // newest
				return new Date(b.date).getTime() - new Date(a.date).getTime();
		}
	});

	return {
		articles: processedArticles,
		totalArticleCount: articles.length,
		metadata: getBlogMetadata(locale)
	};
}
