import { team } from "$lib/server/data/team"
import { getLocale } from '$lib/paraglide/runtime.js';
import { getBaseMetadata, type PageMetadata } from '$lib/utils/metadata';
import * as m from '$lib/paraglide/messages';

function getTeamMetadata(locale: string): PageMetadata {
	const base = getBaseMetadata(locale);
	
	return {
		...base,
		title: `${m.meta_team_title()} | ${base.title}`,
		description: m.meta_team_description(),
		ogTitle: m.meta_team_title(),
		ogDescription: m.meta_team_description()
	};
}

export const load = () => {
    const locale = getLocale();
    return {
        team: team.map((e) => {
            return {
                name: e.name,
                photo: e.photo,
                description: e.description[locale]
            }
        }),
        metadata: getTeamMetadata(locale)
    }
}
