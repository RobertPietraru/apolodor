import { specialGuests } from "$lib/server/data/guests"
import { error } from "@sveltejs/kit";

export const load = ({params}) => {
    const guest = specialGuests.filter((g) => g.role === "writer" && g.name === params.name);
    if (guest.length === 0){
        error(404, "Nu am putut gasi scriitorul");
    }
    return {
guest: guest[0],
    }
}