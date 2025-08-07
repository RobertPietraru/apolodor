import { guests } from "$lib/server/data/guests"

export const load = () => {
    return {
        guests: guests.filter((g) => g.role === "writer").map((e) => {
            return {
                name: e.name,
                photo: e.photo,
            }

        })
    }

}