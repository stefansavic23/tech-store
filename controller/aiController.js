import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getAskAi = (req, res) => {
  res.render("askAi");
};

const postAskAi = async (req, res) => {
  const question = req.body.question;

  const prompt = `Give me key concept form my questions, you can only answer on tech questions else say you are a tech Ai and answer only on tech theme, remove Key Concept at the beginning:${question}`;

  const answer = await model.generateContent(prompt);
  res.render("answer", { answer: answer.response.text() });
};

export { getAskAi, postAskAi };
