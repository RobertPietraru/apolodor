import { redirect } from "@sveltejs/kit";

export const load = async () => {
    redirect(308, '/blog/3');
};