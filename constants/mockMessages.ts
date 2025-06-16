export type MessageType = "text" | "image";

export type Message = {
  messageId: string;
  text: string;
  timeStamp: string;
  from: "rick" | "morty";
  type: MessageType;
  mediaUrl?: string;
};

export const mockMessages: Message[] = [...Array(1000)].map((_, i) => {
  return {
    messageId: `message-${i}`,
    text: `This is message number ${i}`,
    timeStamp: new Date(Date.now() - i * 60 * 1000).toISOString(),
    from: i % 2 === 0 ? "rick" : "morty",
    type: "text",
  };
});
