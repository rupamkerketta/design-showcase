import { format } from "date-fns";
import React from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type SingleBarProps = {
  barWidth: number;
  maxBarHeight: number;
  day: { day: Date; value: number };
};

const SingleBar = (props: SingleBarProps) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        props.day.value > 0.5 ? "#F87171" : "#4ADE80"
      ),
      opacity: withTiming(props.day.value * 4),
      height: withTiming(props.maxBarHeight * props.day.value),
    };
  }, [props.day.value, props.maxBarHeight]);

  return (
    <View>
      <View className="flex-row items-center justify-center mb-2 bg-green">
        <Text className="text-white">
          ₹{(props.day.value * 10).toFixed(1)}K
        </Text>
      </View>
      <Animated.View
        className="rounded-2xl"
        style={[
          {
            width: props.barWidth,
            backgroundColor: "white",
            borderCurve: "continuous",
          },
          rStyle,
        ]}
      />
      <Text
        style={{
          width: props.barWidth,
          textAlign: "center",
          fontSize: 10,
          marginTop: 10,
          color: "#FFFFFF",
        }}
      >
        {format(props.day.day, "eeeee")}
      </Text>
    </View>
  );
};

export default SingleBar;
