import { ACTIVE_COLOR } from "@/constants";
import React from "react";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const DOT_SIZE = 10;
const DOTS_GAP = 20;

type DotsProps = {
  count: number;
  activeIndex: SharedValue<number>;
  activeColor?: string;
};

const Dots = (props: DotsProps) => {
  const rStyle = useAnimatedStyle(() => {
    const width =
      DOT_SIZE * (props.activeIndex.value + 1) +
      DOTS_GAP * (props.activeIndex.value + 1);
    return {
      width: withSpring(width, { mass: 0.6 }),
    };
  });

  return (
    <View className="flex-row" style={{ gap: DOTS_GAP }}>
      {new Array(props.count).fill(0).map((_, idx) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const rDotStyle = useAnimatedStyle(() => {
          const isDotActive = idx <= props.activeIndex.value;
          return {
            opacity: withTiming(isDotActive ? 1 : 0.3),
          };
        });

        return (
          <Animated.View
            key={idx}
            className="bg-white rounded-full"
            style={[
              {
                width: DOT_SIZE,
                height: DOT_SIZE,
              },
              rDotStyle,
            ]}
          />
        );
      })}
      <Animated.View
        className="absolute -z-[1]"
        style={[
          {
            left: -DOTS_GAP / 2,
            height: DOT_SIZE * 3,
            top: -DOT_SIZE,
            backgroundColor: props.activeColor ?? ACTIVE_COLOR,
            borderCurve: "continuous",
            borderRadius: DOT_SIZE * 2,
          },
          rStyle,
        ]}
      />
    </View>
  );
};

export default Dots;
