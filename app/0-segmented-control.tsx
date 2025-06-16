import SegmenetedControl from "@/components/SegmenetedControl";
import { PALETTE } from "@/constants";
import React, { useState } from "react";
import { View } from "react-native";

const OPTIONS: string[] = ["Light", "Standard", "Pro"];

const SegmentedControlWrapper = () => {
  // * Component State - Variables ----------------------------------
  const [selectedOption, setSelectedOption] = useState<string>(OPTIONS[1]);
  // * --------------------------------------------------------------

  return (
    <View
      className="flex-1 bg-white items-center justify-center"
      style={{ backgroundColor: PALETTE.background }}
    >
      <SegmenetedControl
        options={OPTIONS}
        selectedOption={selectedOption}
        onOptionPress={(option) => {
          setSelectedOption(option);
        }}
      />
    </View>
  );
};

export default SegmentedControlWrapper;
