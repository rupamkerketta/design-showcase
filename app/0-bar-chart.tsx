import WeekelyBarChart from "@/components/WeekelyBarChart";
import { BACKGROUND_COLOR, data } from "@/constants";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

const BarChart0 = () => {
  // * Component State - Variables ----------------------------------
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  // * --------------------------------------------------------------

  useEffect(() => {
    console.log(`Active week index changed to: ${activeWeekIndex}`);
    console.log(data[activeWeekIndex]);
  }, [activeWeekIndex]);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <WeekelyBarChart
        activeWeekIndex={activeWeekIndex}
        weeks={data}
        setActiveWeekIndex={setActiveWeekIndex}
      />
    </View>
  );
};

export default BarChart0;
