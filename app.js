const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function run() {
  const prompt = "1+1";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
