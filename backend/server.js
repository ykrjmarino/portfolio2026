import express from 'express';

import { GoogleGenAI } from '@google/genai';
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import cookieParser from "cookie-parser";
import crypto from "crypto";

import cors from "cors";
import dotenv from 'dotenv';
dotenv.config(); // must come first before using process.env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => res.send("Backend is running UwU!"));

const sessions = {}; 

app.use((req, res, next) => {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      secure: false, // true if HTTPS
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    });
  }

  if (!sessions[sessionId]) {
    sessions[sessionId] = [];
  }

  req.sessionId = sessionId;
  req.chatHistory = sessions[sessionId];

  next();
});


//for Gemini chatbot (Structured outputs)
const CV_CONTEXT = `
  MY INFO:
  Name: Yla Marino
  Role: Aspiring Web Developer / IT Student
  Location: Mexico, Pampanga, Philippines

  SKILLS:
  - React.js
  - Node.js / Express
  - PostgreSQL
  - REST API
  - JWT Authentication
  - Git/GitHub

  STACK: PERN

  PROJECTS: 
  1. Online Examination System (Capstone)
    - Features: admin dashboard, teacher dashboard, student exam code entry, monitoring module (Face API, mouse (if it leaves the website), tab switch, resize screen)
    - Frontend: React.js
    - Backend: Node/Express + PostgreSQL
    - Auth: JWT access + refresh token
  2. Portfolio Website
    - React-based portfolio site
    - Includes AI chatbot assistant (Gemini API)

  EDUCATION:
  - BS Information Technology (4th Year)

  DREAM and HOBBIES (if asked only)
  - I’ve always dreamed of flying — like skydiving or just being up in the sky and taking in the view.
  - I also like gaming (minecraft, last war, mir4, pubg) to relax and catch up with friends, and I usually sketch ideas on paper when I’m planning something.

  RULE:
  Answer ONLY using the information above.
  If the user asks something not included, reply:
  "I don't have that information in my portfolio data."
`;

const INSTRUCTIONS = `
  -Answer in first person, as if Yla herself is responding to the employer.
  -Be natural, professional, and friendly — like you are introducing yourself personally.

  -If asked a specific question, give a direct answer.
  -If the user’s question is broad or general (like “Tell me about your projects”), answer the main points and then ask if they want to know more.
  -When asked about projects, talk only about the Capstone project, unless they specifically ask for more.
  -If the user asks a follow-up question, refer to the previous conversation, be concise, and avoid repeating information unnecessarily.

  -Include relevant skills, projects, and education naturally when appropriate.
  -For yes/no or closed-ended questions, do not ask if they want more information.
  -If the user asks about something not in your portfolio, reply: "I don't have that information in my portfolio."
  -Only return the text of the answer — do not include JSON arrays or any extra fields.
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

    req.chatHistory.push({
      role: "user",
      parts: [{ text: message }]
    });

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
        },
        ...req.chatHistory
      ]
    });

    const botReply = response.text;

    req.chatHistory.push({
      role: "model",
      parts: [{ text: botReply }]
    });

    res.json({ reply: botReply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get structured response from Gemini" });
  }
});


app.listen(port, () => {
  // db.connect();
  console.log(`✅ Backend running at http://localhost:${port} (ykrjm2026)`);
});