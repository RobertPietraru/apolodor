import { specialGuests, type Guest } from "$lib/server/data/guests"
import { error } from "@sveltejs/kit";
import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getGuestProfileMetadata(locale: string, guest: Guest): PageMetadata {
	const base = getBaseMetadata(locale);
	const guestTitle = `${guest.name} | ${m.meta_guest_profile_suffix()}`;
	const guestDesc = guest.content || m.meta_guest_profile_description().replace('{name}', guest.name);
	
	return {
		...base,
		title: `${guestTitle} | ${base.title}`,
		description: guestDesc,
		ogTitle: guestTitle,
		ogDescription: guestDesc,
		ogImage: guest.photo || base.ogImage
	};
}

export const load = ({params}) => {
    const locale = getLocale();
    const guest = specialGuests.filter((g) => g.role === "writer" && g.name === params.name);
    if (guest.length === 0){
        error(404, "Nu am putut gasi scriitorul");
    }
    return {
        guest: guest[0],
        metadata: getGuestProfileMetadata(locale, guest[0])
    }
}