import express from 'express';
import { GoogleGenAI } from '@google/genai';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config(); // must come first before using process.env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => res.send("Backend is running UwU!"));

//for Gemini chatbot

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message
    });
console.log(req.body);
    res.json({ reply: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});


app.listen(port, () => {
  // db.connect();
  console.log(`✅ Backend running at http://localhost:${port} (ykrjm2025)`);
});