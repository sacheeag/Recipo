

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
        "HTTP-Referer": "http://localhost:3000", 
        "X-Title": "My Recipe App" 
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
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

