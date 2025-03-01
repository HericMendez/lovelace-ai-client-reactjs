import { useState, useEffect } from "react";
import Message from "../Message";
import {
  Button,
  ChatArea,
  ChatContainer,
  TextArea,
  InputArea,
  Title,
} from "./styles";
import { useLocation } from "react-router-dom";
import { chatWithModel } from "../../services/chatService";
import { formatHtmlContent } from "../../utils/formatHtmlContent";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { state } = useLocation();

  useEffect(() => {}, [state?.user]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", sender: "Você", content: userInput },
    ];
    setMessages(newMessages);
    setUserInput("");
    setIsTyping(true);

    try {
      const response = await chatWithModel(newMessages);
      const formattedHtml = formatHtmlContent(response);
      console.log("formattedHtml ==> ", formattedHtml);

      setMessages([
        ...newMessages,
        { sender: "Ada", role: "assistant", content: formattedHtml },
      ]);
    } catch (error) {
      console.error("Erro ao comunicar com o modelo:", error);
      setMessages([
        ...newMessages,
        { sender: "Ada", content: "Ocorreu um erro. Tente novamente." },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <ChatContainer>
      <Title>💡Modelo {state?.model}💡</Title>
      <ChatArea>
        <Message sender="Ada" text={`Olá ${state?.user}, meu nome é Ada Lovelace, mas pode me chamar de Ada! O que vamos aprender hoje? `} />
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.content} />
        ))}
        {isTyping && <Message sender="Ada" text="Ada está digitando..." />}
      </ChatArea>
      <InputArea>
        <TextArea
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Digite sua pergunta..."
        />
        <Button onClick={handleSend}>Enviar</Button>
      </InputArea>
    </ChatContainer>
  );
};

export default ChatBox;
