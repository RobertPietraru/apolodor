import { getLocale } from '$lib/paraglide/runtime.js';
import { articles } from '$lib/server/data/articles';
import { error } from '@sveltejs/kit';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getBlogArticleMetadata(locale: string, article: any): PageMetadata {
	const base = getBaseMetadata(locale);
	const articleTitle = article.title;
	const articleDesc = article.excerpt || m.meta_blog_article_fallback();
	
	return {
		...base,
		title: `${articleTitle} | ${base.title}`,
		description: articleDesc,
		ogTitle: articleTitle,
		ogDescription: articleDesc,
		ogImage: article.image || base.ogImage,
		ogType: 'article'
	};
}

export const load = async ({ params, url }) => {
	const { id } = params;
	const locale = getLocale();
	console.log(locale);
	const article = articles.find((item) => item.id === id);
	if (!article) {
		error(404, 'Article not found');
	}
	
	const processedArticle = {
		...article,
		title: article?.title[locale],
		excerpt: article?.excerpt[locale],
		content: article?.content[locale]
	};
	
	const relatedArticles = articles.filter((item) => article?.related?.includes(item.id));
	
	return {
		article: processedArticle,
		relatedArticles: relatedArticles.map((item) => ({
			id: item.id,
			image: item.image,
			date: item.date,
			title: item?.title[locale],
			excerpt: item?.excerpt[locale],
		})),
		metadata: getBlogArticleMetadata(locale, processedArticle)
	};
};