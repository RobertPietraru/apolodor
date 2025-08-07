import { getLocale } from '$lib/paraglide/runtime.js';
import { articles } from '$lib/server/data/articles';
import { error } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
	const { id } = params;
	const locale = getLocale();
	console.log(locale);
	const article = articles.find((item) => item.id === id);
	if (!article) {
		error(404, 'Article not found');
	}
	const relatedArticles = articles.filter((item) => article?.related?.includes(item.id));
	return {
		article: {
			...article,
			title: article?.title[locale],
			excerpt: article?.excerpt[locale],
			content: article?.content[locale]
		},
		relatedArticles: relatedArticles.map((item) => ({
			id: item.id,
			image: item.image,
			date: item.date,
			title: item?.title[locale],
			excerpt: item?.excerpt[locale],
		}))
	};
};