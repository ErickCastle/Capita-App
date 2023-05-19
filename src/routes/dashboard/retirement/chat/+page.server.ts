import { addMessage, getMessageFeed } from '$lib/server/database';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const messageFeed = getMessageFeed();
	return { messageFeed };
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);

		// addMessage(formData.prompt);

		// TODO: Send user prompt to ChatGPT and retrieve answer (add the
		//       answer to the chat using the `addMessage` function)
	}
};
