import express from 'express';

import { GoogleGenAI } from '@google/genai';
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

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
/*
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
*/

//for Gemini chatbot (Structured outputs)
const CV_CONTEXT = `
  MY INFO:
  Name: Yla Marino
  Role: Aspiring Web Developer / IT Student
  Location: Pampanga, Philippines

  SKILLS:
  - React.js
  - Node.js / Express
  - PostgreSQL
  - REST API
  - JWT Authentication
  - Git/GitHub

  PROJECTS:
  1. Online Examination System (Capstone)
    - Features: teacher dashboard, student exam code entry, monitoring module (Face API + TensorFlow FaceMesh)
    - Backend: Express + PostgreSQL
    - Auth: JWT access + refresh token
  2. Portfolio Website
    - React-based portfolio site
    - Includes AI chatbot assistant (Gemini API)

  EDUCATION:
  - BS Information Technology (4th Year)

  RULE:
  Answer ONLY using the information above.
  If the user asks something not included, reply:
  "I don't have that information in my portfolio data."
`;

const INSTRUCTIONS = `
  - Answer in **first person**, as if Yla herself is responding to the employer.
  - Be natural, professional, and friendly — like you are introducing yourself personally.
  - Include relevant skills, projects, and education naturally if appropriate.
  - If the user asks about something not in your portfolio, reply: "I don't have that information in my portfolio."
  - Only return the text of the answer — do NOT include JSON arrays or extra fields.
`;

const USER_PERSONALITY = `
  - Enthusiastic, confident, and clear in her explanations.
  - Explains her projects and skills naturally, in her own voice, like talking directly to an employer.
  - Highlights her experience and achievements casually but professionally.
  - Explains technical details in an approachable, understandable way.
`;

// Gemini SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Zod schema with defaults for arrays
const portfolioSchema = z.object({
  answer: z.string(),
  skills: z.array(z.string()).default([]),
  projects: z.array(z.string()).default([]),
  education: z.union([z.string(), z.array(z.string())]).default([]),
  links: z.array(z.string()).default([])
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
                You are Yla, an aspiring web developer and IT student from Pampanga, Philippines.

                About Yla:
                ${USER_PERSONALITY};

                PORTFOLIO DATA:
                ${CV_CONTEXT}

                USER QUESTION:
                ${message}

                Instructions for "answer":
                ${INSTRUCTIONS}
              `
            }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(portfolioSchema)
      }
    });

    // Parse and validate structured JSON
    const parsed = portfolioSchema.parse(JSON.parse(response.text));

    // Make sure education is always an array
    parsed.education = Array.isArray(parsed.education)
      ? parsed.education
      : [parsed.education];

    res.json(parsed);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get structured response from Gemini" });
  }
});


app.listen(port, () => {
  // db.connect();
  console.log(`✅ Backend running at http://localhost:${port} (ykrjm2025)`);
});