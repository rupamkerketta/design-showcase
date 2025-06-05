import { Extrapolate } from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type PageProps = {
  title: string;
  index: number;
  translateX: SharedValue<number>;
};

const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;

const Page = ({ title, index, translateX }: PageProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  }, [translateX]);

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{
        height,
        width,
        backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`,
      }}
    >
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            backgroundColor: "blue",
            position: "absolute",
          },
          rStyle,
        ]}
      />
      <Animated.View className="position-absolute" style={rTextStyle}>
        <Text className="text-[60px] color-white uppercase font-bold ">
          {title}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Page;
