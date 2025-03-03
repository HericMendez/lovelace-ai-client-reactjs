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

  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  function filterDuplicateUserMessages(messages) {
    return messages.reduce((filtered, current, index, arr) => {
      // Se não for um 'user' ou se for o último 'user' seguido de outro 'user', adiciona ao resultado
      if (
        current.role !== "user" ||
        index === arr.length - 1 ||
        arr[index + 1].role !== "user"
      ) {
        filtered.push(current);
      }
      return filtered;
    }, []);
  }
  const handleSend = async () => {
    if (!userInput.trim()) return;
    console.log("userInput ==> ", userInput);

    const newMessages = [
      ...messages,
      { role: "user", sender: "Você", content: userInput },
    ];
    const filteredDuplicatedMessages = filterDuplicateUserMessages(newMessages);

    setMessages(filteredDuplicatedMessages);
    setUserInput("");
    console.log(
      "filteredDuplicatedMessages=>>",
      filterDuplicateUserMessages(filteredDuplicatedMessages)
    );
    setIsTyping(true);

    try {
      const { data } = await axios.post(`${API_BASE_URL}/chat/${model}`, {
        messages: filteredDuplicatedMessages,
      });
      console.log("response from server ==>", data);

      setMessages([
        ...filteredDuplicatedMessages,
        ...(Array.isArray(data.response)
          ? data.response
          : [{ sender: "Ada", role: "assistant", content: data.response }]),
      ]); //chain and graph models use different data types, this decision structure fixes it
    } catch (error) {
      console.error("Erro ao comunicar com o modelo:", error);
      setMessages([
        ...filteredDuplicatedMessages,
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
        />{" "}
        {/* hard-coded greeting message */}
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
