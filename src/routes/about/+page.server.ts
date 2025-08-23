import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getAboutMetadata(locale: string): PageMetadata {
	const base = getBaseMetadata(locale);
	
	return {
		...base,
		title: `${m.meta_about_title()} | ${base.title}`,
		description: m.meta_about_description(),
		ogTitle: m.meta_about_title(),
		ogDescription: m.meta_about_description()
	};
}

export const load = () => {
    const locale = getLocale();
    return {
        metadata: getAboutMetadata(locale)
    }
} 