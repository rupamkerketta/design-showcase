import DemoCard from "@/components/DemoCard";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DemoCard title="DemoCard" />
    </View>
  );
}
