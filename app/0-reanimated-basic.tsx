import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const SIZE = 100;
const DURATION = 0.6 * 1_000; // 600ms
const REPEAT = -1; // Infinite repeat

const handleRotation = (progress: Animated.SharedValue<number>) => {
  "worklet";

  return `${progress.value * 2 * Math.PI}rad`;
};

const Index = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        {
          rotate: handleRotation(progress),
        },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(
      withSpring(0.5, { duration: DURATION }),
      REPEAT,
      true
    );
    scale.value = withRepeat(
      withSpring(1, { duration: DURATION }),
      REPEAT,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "blue" },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

export default Index;
