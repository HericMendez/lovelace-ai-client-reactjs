// chatService.jsx:
import { TogetherAI } from "@langchain/community/llms/togetherai";
import { TOGETHER_AI_API_KEY, TOGETHER_AI_MODEL } from "../config";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

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
  try {
    const response = await chatModel.invoke(messages.map((msg) => new HumanMessage(msg.content)));
    console.log("response ==> ", response);
    return response;
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    throw new Error("Erro ao chamar o modelo");
  }
};
