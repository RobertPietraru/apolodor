import { specialGuests } from "$lib/server/data/guests"

export const load = () => {
    return {
        guests: specialGuests.filter((g) => g.role === "writer").map((e) => {
            return {
                name: e.name,
                photo: e.photo,
            }

        })
    }

}