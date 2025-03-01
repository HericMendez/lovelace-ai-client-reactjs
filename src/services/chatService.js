// chatService.jsx:
import { TogetherAI } from "@langchain/community/llms/togetherai";
import { TOGETHER_AI_API_KEY, TOGETHER_AI_MODEL } from "../config";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

console.log(
  "TOGETHER_AI_API_KEY, TOGETHER_AI_MODEL  ==> ",
  TOGETHER_AI_API_KEY,
  TOGETHER_AI_MODEL
);

// Configura o modelo do LangChain usando Together AI
const chatModel = new TogetherAI({
  apiKey: TOGETHER_AI_API_KEY,
  model: TOGETHER_AI_MODEL,
  maxTokens: 256,
  temperature: 0.7,
});

// Função que comunica com o modelo usando LangChain
export const chatWithModel = async (messages) => {
  const customInstructions = [
    new HumanMessage(
      "Apresente-se como Ada, você será minha tutora de matemática, e responderá apenas a perguntas de matemática. Perguntas não relacionadas com matemática devem receber uma devolutiva negativa."
    ),
    new AIMessage("Olá! Sou Ada, sua tutora de matemática. Como posso ajudar?")
  ];

  try {
    const response = await chatModel.invoke([...customInstructions, ...messages.map(msg => new HumanMessage(msg.content))]);
    return response;
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    throw new Error("Erro ao chamar o modelo");
  }
};
