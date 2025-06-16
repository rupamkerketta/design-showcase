// src/components/Chat/ChatInput.tsx
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
import { Message } from "../../constants/mockMessages";

export default function ChatInput({
  onSend,
}: {
  onSend: (m: Message) => void;
}) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend({
      messageId: Date.now().toString(),
      text,
      timeStamp: new Date().toISOString(),
      from: "rick",
      type: "text",
    });
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 12,
          backgroundColor: "#1e293b",
        }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
          placeholderTextColor="#94a3b8"
          style={{ flex: 1, color: "#fff", paddingRight: 10 }}
        />
        <Button title="Send" onPress={handleSend} disabled={!text.trim()} />
      </View>
    </KeyboardAvoidingView>
  );
}
