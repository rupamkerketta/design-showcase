import Dots from "@/components/Dots";
import Page from "@/components/Page";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

// * CONSTANTS ------------------------------------------------------
const WORDS = ["Wazzup", "Hello", "World", "React", "Native"];
// * ----------------------------------------------------------------

const ReanimatedScrollHorizontal = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / windowWidth);
  });

  return (
    <View style={{ height: windowHeight }}>
      <Animated.ScrollView
        className="flex-1 bg-white"
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16} // 60 FPS
        horizontal
      >
        {WORDS.map((word, index) => (
          <Page
            key={index}
            title={word}
            index={index}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
        }}
      >
        <Dots
          count={WORDS.length}
          activeIndex={activeIndex}
          activeColor={"blue"}
        />
      </View>
    </View>
  );
};

export default ReanimatedScrollHorizontal;
