import { useFocusEffect } from "@react-navigation/native"; // <-- for navigation reset
import React from "react";
import { Dimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function clamp(val: number, min: number, max: number): number {
  // Optionally keep or remove this debug log
  // console.log(`Clamping value: ${val} to range [${min}, ${max}]`);
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get("screen");

// Constants for layout
const BOUNDARY_RADIUS = 230;
const CIRCLE_SIZE = 360;
const SQUARE_SIZE = 100;

export default function ReanimatedBasic() {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const previousTranslationX = useSharedValue(0);
  const previousTranslationY = useSharedValue(0);

  const circleBorderColor = useSharedValue("#3b82f6");

  // --- Navigation focus reset: always fresh values ---
  useFocusEffect(
    React.useCallback(() => {
      translationX.value = 0;
      translationY.value = 0;
      previousTranslationX.value = 0;
      previousTranslationY.value = 0;
      circleBorderColor.value = "#3b82f6";
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    borderColor: circleBorderColor.value,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderWidth: 5,
    borderRadius: CIRCLE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // always transparent for pointer events
  }));

  const boxAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: circleBorderColor.value,
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: 24,
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      previousTranslationX.value = translationX.value;
      previousTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width / 2 - SQUARE_SIZE / 2;
      const maxTranslateY = height / 2 - SQUARE_SIZE / 2;

      translationX.value = clamp(
        previousTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
      );

      translationY.value = clamp(
        previousTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY
      );

      if (
        Math.sqrt(translationX.value ** 2 + translationY.value ** 2) >
        BOUNDARY_RADIUS
      ) {
        circleBorderColor.value = withTiming("#f87171", { duration: 120 }); // red
      } else {
        circleBorderColor.value = withTiming("#3b82f6", { duration: 120 }); // blue
      }
    })
    .onEnd(() => {
      const distance = Math.sqrt(
        translationX.value ** 2 + translationY.value ** 2
      );
      if (distance < BOUNDARY_RADIUS) {
        translationX.value = withSpring(0);
        translationY.value = withSpring(0);
      }
    })
    .runOnJS(true);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
      }}
    >
      <Animated.View style={circleAnimatedStyle}>
        <GestureDetector gesture={pan}>
          <Animated.View style={boxAnimatedStyle} />
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
