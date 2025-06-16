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
          <Drawer.Screen
            name="0-skia-basic"
            options={{ title: "Skia Artboard" }}
          />
          <Drawer.Screen
            name="1-gestures"
            options={{ title: "Reanimated - Pan Gesture 1" }}
          />
          <Drawer.Screen
            name="1-reanimated-basic"
            options={{ title: "Reanimated Basic - Pan Gesture 2" }}
          />
          <Drawer.Screen
            name="0-reanimated-basic"
            options={{ title: "Reanimated Basic - Spring and Transform" }}
          />

          <Drawer.Screen
            name="0-layouts-grid"
            options={{ title: "Grid of Cards" }}
          />

          <Drawer.Screen
            name="0-masonry-gallery"
            options={{ title: "Masonry Gallery 1" }}
          />

          <Drawer.Screen
            name="1-reanimated-scroll"
            options={{ title: "Reanimated Scroll - 1" }}
          />

          <Drawer.Screen
            name="0-flatlist"
            options={{ title: "Animated FlatList - 0" }}
          />

          <Drawer.Screen
            name="0-segmented-control"
            options={{ title: "Segmented Control" }}
          />

          <Drawer.Screen
            name="0-bar-chart"
            options={{ title: "Bar Chart 0" }}
          />

          <Drawer.Screen
            name="0-onboarding"
            options={{ title: "Onboarding - Page Dots" }}
          />

          <Drawer.Screen
            name="0-chat-ui-performance"
            options={{ title: "Chat UI Performance - LegendList" }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
