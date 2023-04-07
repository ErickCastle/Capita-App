import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        console.log(data);

        const response = await fetch("http://127.0.0.1:5000/test");
        console.log(response);
    }
} satisfies Actions;
