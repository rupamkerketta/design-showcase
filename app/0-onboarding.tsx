import Dots from "@/components/Dots";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from "react-native-reanimated";

const DOT_COUNT = 3;

const Onboarding0 = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const scrollAnimatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollAnimatedRef);

  const activeIndex = useDerivedValue(() => {
    return Math.round(scrollOffset.value / windowWidth);
  });

  return (
    <View className="flex-1 bg-black">
      <Animated.ScrollView
        ref={scrollAnimatedRef}
        className="flex-1"
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        decelerationRate={"fast"}
      >
        {new Array(DOT_COUNT).fill(0).map((_, idx) => (
          <View
            key={idx}
            style={{
              width: windowWidth,
              height: windowHeight,
              backgroundColor: "#fff",
              opacity: idx * 0.1,
            }}
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
        <Dots count={DOT_COUNT} activeIndex={activeIndex} />
      </View>
    </View>
  );
};

export default Onboarding0;
