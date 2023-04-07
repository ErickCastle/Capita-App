import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        // Get data from Form
        const data = await request.formData();
        console.log("DATA RECEIVED");

        type Org = {[key: string]: FormDataEntryValue}
        let data_entries: Org = {}

        for (var pair of data.entries()) {
            data_entries[pair[0]] = pair[1];
        }

        console.log("data_entries: " + data_entries)

        const response = await fetch("http://127.0.0.1:5000/test", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data_entries)
        });
        
        console.log("response: " + response)
    }
} satisfies Actions;
