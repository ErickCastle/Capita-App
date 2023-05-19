import type { Actions } from '@sveltejs/kit';
import { openai } from '$lib/server/openai';

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);

		try {
			const completion = await openai.createChatCompletion(
				{
					model: 'gpt-3.5-turbo',
					messages: [
						{ role: 'system', content: 'You are a helpful assistant.' },
						{ role: 'user', content: 'Who won the world series in 2020?' },
						{
							role: 'assistant',
							content: 'The Los Angeles Dodgers won the World Series in 2020.'
						},
						{ role: 'user', content: 'Where was it played?' }
					]
				},
				{
					timeout: 5000,
					headers: {
						'Example-Header': 'example'
					}
				}
			);

			const firstResponseChoice = completion.data?.choices?.[0];
			const answer = firstResponseChoice
				? completion.data.choices[0].message.content
				: null;
			console.log(answer);

			return { answer: answer };
		} catch (e: any) {
			console.log(e.response);
		}
	}
} satisfies Actions;
