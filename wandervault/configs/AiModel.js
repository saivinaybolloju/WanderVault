import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.EXPO_PUBLIC_GEMINI_AI_KEY});

    const model=ai.getGenerativeModel({
        model: "gemini-2.0-flash",
        generationConfig:{
            temperature:1,
            topP:0.95,
            topK:64,
            maxOutputTokens:8192,
            responseMimeType:"application/json"
        },
    });
    export  const chatSession=model.startChart({
  generationConfig,
    history:[

    ],
    });


//     const result=await chatSession.sendMessage("INSERT_INPUT_HERE")
//   console.log(response.text);

