import { allGuests, type Guest } from "$lib/server/data/guests"
import { error } from "@sveltejs/kit";
import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getGuestProfileMetadata(locale: string, guest: Guest): PageMetadata {
	const base = getBaseMetadata(locale);
	const guestTitle = `${guest.name} | ${m.meta_guest_profile_suffix()}`;

	return {
		...base,
		title: `${guestTitle} | ${base.title}`,
		ogTitle: guestTitle,
		ogImage: guest.photo || base.ogImage
	};
}

export const load = ({ params }) => {
	const locale = getLocale();
	const guests = allGuests.filter((g) => g.name === params.name);
	if (guests.length === 0) {
		error(404, "Nu am putut gasi scriitorul");
	}
	const guest = guests[0];
	return {
		guest: {
			...guest,
			content: guest.content[locale]
		},
		metadata: getGuestProfileMetadata(locale, guest)
	}
}