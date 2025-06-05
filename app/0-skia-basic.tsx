import React from "react";

import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// * CONSTANTS ------------------------------------------------------
const WIDTH = 265;
const HEIGHT = 256;
const R = WIDTH * 0.33;
// * ----------------------------------------------------------------

const SkiaBasic = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="flex-1 items-center justify-center">
        <Canvas
          style={{
            width: WIDTH,
            height: HEIGHT,
          }}
        >
          <Group blendMode="multiply">
            <Circle cx={R} cy={R} r={R} color="cyan" />
            <Circle cx={R * 2} cy={R} r={R} color="magenta" />
            <Circle cx={WIDTH / 2} cy={HEIGHT - R} r={R} color="yellow" />
          </Group>
        </Canvas>

        <View className="mt-4">
          <Text className="text-white text-2xl">Skia Artboard</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SkiaBasic;
