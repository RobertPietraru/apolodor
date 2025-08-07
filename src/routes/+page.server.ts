import { landingPageGuests } from '$lib/server/data/guests';

export async function load() {
	return {
		guests: landingPageGuests
	};
}
