import { ChatMistralAI} from "@langchain/mistralai"


let model = new ChatMistralAI({
    apiKey: process.env.MISTRALAI_API_KEY,
    model: "mistral-medium-latest"
});


export let generateCodeService = async (prompt) =>{

    let response = await model.invoke([
        {
            role:"system",
            content:`
You are an expert software developer.

Generate clean, production-quality code.

Rules:
- Return only the code.
- Do not use markdown code fences.
- Do not explain the code.
- Follow the programming language requested by the user.
- If the user does not specify a language, infer it from the current editor language.
            `,
        },
        {
            role:"user",
            content: prompt,
        }

    ])
    return response.content;
}