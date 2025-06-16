import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

// * CONSTANTS ------------------------------------------------------
import { PALETTE } from "@/constants";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
// * ----------------------------------------------------------------

type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onOptionPress: (option: string) => void;
};

const { width } = Dimensions.get("window");

const SegmentedControl = (props: SegmentedControlProps) => {
  const segmentedControlWidth = width - 40; // Adjusted width for the control
  const itemWidth = (segmentedControlWidth - 16) / props.options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(itemWidth * props.options.indexOf(props.selectedOption)),
    };
  }, [props.selectedOption, itemWidth, props.options]);

  return (
    <View
      className={`flex-row p-2 rounded-2xl`}
      style={{
        backgroundColor: PALETTE.baseGray05,
        width: segmentedControlWidth,
        height: 50,
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",

            width: itemWidth,
            height: "95%",

            marginTop: 8,
            marginLeft: 8,

            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            elevation: 5,
            backgroundColor: PALETTE.background,
            borderRadius: 8,
          },
          rStyle,
        ]}
      />
      {props.options.map((option) => {
        return (
          <TouchableOpacity
            onPress={() => props.onOptionPress(option)}
            key={option}
            className="items-center justify-center"
            style={{ width: itemWidth }}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentedControl;
