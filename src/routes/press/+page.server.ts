import { getBaseMetadata, type PageMetadata } from "$lib/utils/metadata";
import { getLocale } from "$lib/paraglide/runtime.js";

function getPressMetadata(locale: string): PageMetadata {
    const base = getBaseMetadata(locale);
    const pressTitle = locale === 'en' ? 'Press' : 'Presă';
    const pressDesc = locale === 'en'
        ? 'APOLODOR in the Press'
        : 'APOLODOR în presă';

    return {
        ...base,
        title: `${pressTitle} | ${base.title}`,
        description: pressDesc,
        ogTitle: pressTitle,
        ogDescription: pressDesc
    };
}

export const load = async () => {
    const locale = getLocale();
    return {
        metadata: getPressMetadata(locale)
    };
};