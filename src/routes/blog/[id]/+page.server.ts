import { articles } from "$lib/server/data/articles";

export const load = async ({ params }) => {
	const { id } = params;
	const article = articles.find((item) => item.id === id);
	return {
		article
	};
};