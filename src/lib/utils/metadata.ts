import * as m from '$lib/paraglide/messages';

export interface PageMetadata {
	title: string;
	description: string;
	keywords?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
	ogType?: string;
	twitterCard?: string;
	canonical?: string;
}

const DEFAULT_IMAGE = 'https://apolodor.vercel.app/assets/logos/logo.png';

export function getBaseMetadata(locale: string): PageMetadata {
	return {
		title: m.festival_name(),
		description: m.meta_site_description(),
		keywords: m.meta_keywords(),
		ogTitle: m.festival_name(),
		ogDescription: m.meta_site_description(),
		ogImage: DEFAULT_IMAGE,
		ogType: 'website',
		twitterCard: 'summary_large_image'
	};
}

