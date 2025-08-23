import { specialGuests } from "$lib/server/data/guests"
import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getGuestsMetadata(locale: string): PageMetadata {
	const base = getBaseMetadata(locale);
	
	return {
		...base,
		title: `${m.meta_guests_title()} | ${base.title}`,
		description: m.meta_guests_description(),
		ogTitle: m.meta_guests_title(),
		ogDescription: m.meta_guests_description()
	};
}

export const load = () => {
    const locale = getLocale();
    return {
        guests: specialGuests.filter((g) => g.role === "writer").map((e) => {
            return {
                name: e.name,
                photo: e.photo,
            }
        }),
        metadata: getGuestsMetadata(locale)
    }
}