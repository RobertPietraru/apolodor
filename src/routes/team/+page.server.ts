import { team } from "$lib/server/data/team"

export const load = () => {
    return {
        team: team.map((e) => {
            return {
                name: e.name,
                photo: e.photo,
                role: getRole(e.role),
            }
        })
    }

}
function getRole(role: string) {
    switch (role) {
        case 'developer':
            return 'Dezvoltator Web'
        case 'designer':
            return 'Designer'
        case 'organizer':
            return 'Organizator'
        default:
            return 'Altul'
    }
}