// // import Anthropic from "@anthropic-ai/sdk"
// import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `


// const HF_API_KEY = process.env.REACT_APP_HF_API_KEY;

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await HF_API_KEY.chatCompletion({
//             model: "mistralai/Mixtral-8x22B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//     }
// }

// import { HfInference } from '@huggingface/inference';

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
// `;

// const HF_API_KEY = process.env.REACT_APP_HF_API_KEY;
// const hf = new HfInference(HF_API_KEY);  // ✅ This is the correct way to use the SDK
// console.log("HF API Key:", HF_API_KEY);


// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content;
//     } catch (err) {
//         console.error(err.message)
//     }
// }

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe the user can make. You don't have to use all the ingredients. Keep extra ingredients minimal. Format your response in markdown.
`;

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY; // Save your key in .env file

export async function getRecipeFromOpenRouter(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // Change if deploying elsewhere
        "X-Title": "My Recipe App" // Optional: Give your app a name
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct", // or try openchat/openchat-3.5
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `I have ${ingredientsString}. What can I cook?` }
        ]
      })
    });

    const data = await response.json();
    if (data?.choices?.[0]?.message?.content) {
      return data.choices[0].message.content;
    } else {
      throw new Error("Invalid response from model");
    }
  } catch (err) {
    console.error("OpenRouter Error:", err.message);
    return "Sorry, I couldn't generate a recipe. Please try again.";
  }
}

