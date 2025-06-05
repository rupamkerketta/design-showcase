import Page from "@/components/Page";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

// * CONSTANTS ------------------------------------------------------
const WORDS = ["Wazzup", "Hello", "World", "React", "Native"];
// * ----------------------------------------------------------------

const ReanimatedScrollHorizontal = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      className="flex-1 bg-white"
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16} // 60 FPS
      horizontal
    >
      {WORDS.map((word, index) => (
        <Page key={index} title={word} index={index} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
};

export default ReanimatedScrollHorizontal;
