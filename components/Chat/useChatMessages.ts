// src/components/Chat/useChatMessages.ts
import { useState } from "react";
import { Message } from "../../constants/mockMessages";
import rawMessages from "../../constants/mockMessages.json";

export const useChatMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    ...rawMessages.map((msg, idx) => ({
      ...msg,
    })),
  ] as Message[]);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  return { messages, addMessage };
};
