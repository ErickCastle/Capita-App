import { addUserMessage, addAssistantMessage, getMessageFeed, addGPTMessage, getGPTMessageFeed} from '$lib/server/database';
import type { Actions } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';
import type { PageServerLoad } from '../../../form/$types';
import { openai } from '$lib/server/openai';

export const load: PageServerLoad = async () => {
	const messageFeed = getMessageFeed();
	return { messageFeed };
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);

		// Add the new prompt to both the addUserMessage and the addGPTMessage 
		addUserMessage(formData.prompt);
		addGPTMessage("user", formData.prompt);

		// ----------------------- CHATGPT ANSWER GENERATION -----------------------
		try{
			const completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: getGPTMessageFeed(),
				temperature: 0.2,
			}	
			);
	
			const firstResponseChoice = completion.data?.choices?.[0];
			const answer: string = firstResponseChoice ? completion.data.choices[0].message.content : null;

			// Add first answer into the addGPTMessage database
			addGPTMessage("assistant", answer);

			// Add the answer to the assistantMessage corpus, and return it
			let assistantMessage = addAssistantMessage(answer)	
			return {assistantMessage: assistantMessage};

		} catch (e) {
			console.log("=======================Error=======================")
			console.log(e.response)
			console.log("=======================Error=======================")
		}		


	}
};
