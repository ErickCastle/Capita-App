import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const age = data.get("age")
        console.log(data);

        const response = await fetch("http://127.0.0.1:5000/test", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(age)
        });
    }
} satisfies Actions;
