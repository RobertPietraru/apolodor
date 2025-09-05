import { allGuests } from "$lib/server/data/guests"
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
    
    const mapGuest = (guest: any) => ({
        name: guest.name,
        photo: guest.photo,
        role: guest.role,
        specialGuest: guest.specialGuest
    });
    
    return {
        writers: allGuests.filter((g) => g.role === "writer").map(mapGuest),
        illustrators: allGuests.filter((g) => g.role === "illustrator").map(mapGuest),
        singers: allGuests.filter((g) => g.role === "singer").map(mapGuest),
        moderators: allGuests.filter((g) => g.role === "moderator").map(mapGuest),
        metadata: getGuestsMetadata(locale)
    }
}