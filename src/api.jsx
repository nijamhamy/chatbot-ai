import axios from "axios";

export async function sendMessage(msg) {
    try {
        const res = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "meta-llama/llama-3-70b-instruct",
                messages: [{ role: "user", content: msg }]
            },
            {
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                }
            }
        );

        return res.data.choices[0].message.content;
    } catch (error) {
        console.error("AI Error:", error.response?.data || error);
        return "Error: Unable to get response!";
    }
}
