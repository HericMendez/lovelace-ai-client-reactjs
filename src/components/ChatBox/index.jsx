/* eslint-disable react/prop-types */
import { useState } from "react";
import Message from "../Message";
import {
  Button,
  ChatArea,
  ChatContainer,
  TextArea,
  InputArea,
  Title,
} from "./styles";
import axios from "axios";
import { API_BASE_URL } from "../../config";
const ChatBox = ({ user, model }) => {
  const [messages, setMessages] = useState([]);
  console.log("messages ==> ", messages);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
      const { data } = await axios.post(`${API_BASE_URL}/chat/${model}`, {
        messages: newMessages,
      });
      console.log("response from server ==>", data);

      setMessages([
        ...newMessages,
        { sender: "Ada", role: "assistant", content: data.response },
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
      <Title>💡Modelo {model}💡</Title>

      <ChatArea>
        <Message
          sender="Ada"
          text={`Olá ${user}, meu nome é Ada Lovelace, mas pode me chamar de Ada! O que vamos aprender hoje? `}
        />
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
