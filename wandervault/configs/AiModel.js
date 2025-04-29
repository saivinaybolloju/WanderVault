// // configs/AiModel.js
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI({
//   apiKey: process.env.EXPO_PUBLIC_GEMINI_AI_KEY, // Make sure this key is set in your .env or app config
// });

// // For chat-based sessions (optional if needed later)
// export const startChatSession = async () => {
//   const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

//   const chatSession = await model.startChat({
//     history: [],
//     generationConfig: {
//       temperature: 1,
//       topP: 0.95,
//       topK: 64,
//       maxOutputTokens: 8192,
//     },
//   });

//   return chatSession;
// };

// //This function is used in generative-trip.jsx
// export const generateGeminiResponse = async (prompt) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = await response.text();
//     return text;
//   } catch (error) {
//     console.error('Gemini generation error:', error);
//     throw error;
//   }
// };
