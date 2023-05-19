import { addUserData } from '$lib/server/database';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);

		// TODO: Solve TypeScript issues
		addUserData(formData);

		throw redirect(303, '/dashboard');
	}
} satisfies Actions;
