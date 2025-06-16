// src/components/Chat/ChatScreen.tsx
import { LegendList } from "@legendapp/list";
import { SafeAreaView, View } from "react-native";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import { useChatMessages } from "./useChatMessages";

export default function ChatScreen() {
  const { messages, addMessage } = useChatMessages();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View style={{ flex: 1 }}>
        <LegendList
          data={messages}
          estimatedItemSize={80}
          keyExtractor={(item) => item.messageId}
          renderItem={({ item }) => <ChatBubble message={item} />}
          contentContainerStyle={{ padding: 12 }}
          alignItemsAtEnd
          maintainScrollAtEnd
          maintainScrollAtEndThreshold={0.1}
        />
        <ChatInput onSend={addMessage} />
      </View>
    </SafeAreaView>
  );
}
