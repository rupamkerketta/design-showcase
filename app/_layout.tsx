import "../global.css";

import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the URL from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
