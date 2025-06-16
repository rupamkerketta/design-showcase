// src/components/Chat/ChatBubble.tsx
import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Message } from "../../constants/mockMessages";
import Avatar from "./Avatar";

export default function ChatBubble({ message }: { message: Message }) {
  const isMe = message.from === "rick";

  return (
    <Animated.View
      entering={FadeIn.duration(600)}
      style={{
        flexDirection: isMe ? "row-reverse" : "row",
        alignItems: "flex-end",
        marginVertical: 4,
        gap: 8,
      }}
    >
      <Avatar from={message.from} />
      <View
        style={{
          backgroundColor: isMe ? "#3b82f6" : "#e5e7eb",
          borderRadius: 16,
          padding: 8,
          maxWidth: "75%",
        }}
      >
        <Text style={{ color: isMe ? "#fff" : "#000" }}>{message.text}</Text>
      </View>
    </Animated.View>
  );
}
