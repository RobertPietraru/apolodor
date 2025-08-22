import { team } from "$lib/server/data/team"
import { getLocale } from '$lib/paraglide/runtime.js';

export const load = () => {
    const locale = getLocale();
    return {
        team: team.map((e) => {
            return {
                name: e.name,
                photo: e.photo,
                description: e.description[locale]
            }
        })
    }

}
