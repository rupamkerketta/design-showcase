import { format } from "date-fns";
import React from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import SingleBar from "./SingleBar";

type Day = {
  day: Date;
  value: number; // Value between 0 and 1
};

type Week = Day[];

type WeeklyBarChartProps = {
  weeks: Week[];
  activeWeekIndex: number;
  setActiveWeekIndex: React.Dispatch<React.SetStateAction<number>>;
};

const WeekelyBarChart = (props: WeeklyBarChartProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const activeWeek = props.weeks[props.activeWeekIndex] || [];

  const BarChartWidth = windowWidth * 0.9; // Adjust the width of the bar chart
  const BarChartGap = 10;
  const BarWidth = (BarChartWidth - BarChartGap * (activeWeek.length - 1)) / 7;
  const MaxBarHeight = 150;
  const ScrollViewHeight = 60;

  return (
    <View
      style={{
        height: ScrollViewHeight + MaxBarHeight,
      }}
    >
      <View
        style={{
          width: BarChartWidth,
          height: 1,
          backgroundColor: "#ffffff",
          position: "absolute",
          top: MaxBarHeight / 2,
          left: (windowWidth - BarChartWidth) / 2,
          zIndex: 1,
          opacity: 0.1,
        }}
      />
      <View
        className="flex-row items-end"
        style={{
          gap: BarChartGap,
          height: MaxBarHeight,
          marginHorizontal: (windowWidth - BarChartWidth) / 2,
        }}
      >
        {activeWeek.map((day, idx) => {
          return (
            <SingleBar
              key={idx}
              barWidth={BarWidth}
              maxBarHeight={MaxBarHeight}
              day={day}
            />
          );
        })}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={windowWidth}
        scrollEventThrottle={16} // 60 FPS - 1000ms / 60 = 16.67ms
        onScroll={({ nativeEvent }) => {
          console.log(
            "Scroll position:",
            Math.round(nativeEvent.contentOffset.x / windowWidth)
          );
          props.setActiveWeekIndex(
            Math.round(nativeEvent.contentOffset.x / windowWidth)
          );
        }}
        style={{
          width: windowWidth,
          height: ScrollViewHeight,
        }}
      >
        {props.weeks.map((week, weekIndex) => {
          return (
            <View
              key={weekIndex}
              style={{ width: windowWidth, height: ScrollViewHeight }}
              className="items-center justify-center"
            >
              <Text className="text-white text-sm">{`Week of ${format(
                week[0].day,
                "dd MMMM"
              )}`}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WeekelyBarChart;
