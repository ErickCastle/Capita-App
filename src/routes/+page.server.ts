import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);
	}
};
