import { addUserData } from '$lib/server/database';
import { redirect, type Actions } from '@sveltejs/kit';
import { openai } from '$lib/server/openai';
import { addGPTMessage, getGPTMessageFeed } from '$lib/server/database';


export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.log(formData);

		let content_1 = `
			From now on, you will act as an intelligent financial agent capable of helping me make decisions about certain questions regarding how I should manage my money based on certain personal goals for the future. To do this, you will have some of my basic information regarding salary, marital status, etc. Although the information that you will have available may not be 100% complete to answer one of my questions in detail, PLEASE make sure to provide a calculation or approximate answer, so that I can take some action on it, and in case of If there is any crucial information missing, PLEASE let me know exactly what information I should provide so that you can reply accordingly.

			As the first task, take the following text in JSON format and convert it to a table, which you will name "AYTABLITA". For your better understanding, make sure that those fields that contain a list of statements are simplified as the following example: ["a", "b", "c"] -> a, b, c

			Once you show me the table, please keep it in your memory, because it is from this table that I will be consulting you for my doubts in the field of finance.

			Next, I leave you the information in JSON format:

			---

			${JSON.stringify(formData)}

			---
		`;

		// Add new prompt into the addGPTMessage database
		addGPTMessage("user", content_1);

		try{
			const completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: getGPTMessageFeed(),
				temperature: 0.2,
			}	
			);
	
			const firstResponseChoice = completion.data?.choices?.[0];
			const answer = firstResponseChoice ? completion.data.choices[0].message.content : null;

			// Add first answer into the addGPTMessage database
			addGPTMessage("assistant", answer);


		} catch (e) {
			console.log("=======================Error=======================")
			console.log(e.response)
			console.log("=======================Error=======================")
		}

		// TODO: Solve TypeScript issues
		// addUserData(formData);

		throw redirect(303, '/dashboard');
	}
} satisfies Actions;
