import PerformanceOverlay from "@/components/PerformanceOverlay";

import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";

export default function Layout() {
  return (
    <>
      <PerformanceOverlay />
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
          <Drawer.Screen name="index" />
          <Drawer.Screen name="layouts" />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
