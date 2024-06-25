const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv = require("dotenv").config();

const geminiRequester = async (seed) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = seed;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  //console.log("From gemini.js text sent to telegram: " + text);
  return text;
};

module.exports = { geminiRequester };
