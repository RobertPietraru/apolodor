import { getLocale } from '$lib/paraglide/runtime';
import { articles } from '$lib/server/data/articles';
import * as m from '$lib/paraglide/messages';
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

export async function load({ url }) {
	const locale = getLocale();

	// Get URL parameters for search/filter
	const query = url.searchParams.get('q') || '';
	const category = url.searchParams.get('category') || 'all';
	const sort = url.searchParams.get('sort') || 'newest';

	// Process articles
	let selectedArticles = articles;

	// Apply filters
	if (query) {
		selectedArticles = selectedArticles.filter(
			(article: typeof articles[number]) =>
				article.title[locale].toLowerCase().includes(query.toLowerCase()) ||
				article.excerpt[locale].toLowerCase().includes(query.toLowerCase())
		);
	}

	if (category !== 'all') {
		selectedArticles = selectedArticles.filter((article) => article.category === category);
	}

	// Apply sorting
	selectedArticles.sort((a, b) => {
		switch (sort) {
			case 'oldest':
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			case 'az':
				return a.title[locale].localeCompare(b.title[locale]);
			case 'za':
				return b.title[locale].localeCompare(a.title[locale]);
			default: // newest
				return new Date(b.date).getTime() - new Date(a.date).getTime();
		}
	});

	const processedArticles = selectedArticles.map((item) => ({
		...item,
		category: getCategory(item.category),
		title: item.title[locale],
		image: item.image[locale],
		excerpt: item.excerpt[locale],
		content: item.content[locale]
	}))

	return {
		articles: processedArticles,
		totalArticleCount: articles.length,
		metadata: getBlogMetadata(locale)
	};
}
