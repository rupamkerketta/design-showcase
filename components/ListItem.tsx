import React from "react";
import { Text, ViewToken } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ListItemProps = {
  item: { id: number };
  viewableItems: SharedValue<ViewToken[]>;
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }: ListItemProps) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = viewableItems.value
        .filter((viewableItem: ViewToken) => viewableItem.isViewable)
        .find((viewableItem: ViewToken) => viewableItem.item.id === item.id);

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
      };
    });

    return (
      <Animated.View
        className="w-[90%] h-[80px] bg-[#78CAD2] self-center rounded-[15px] mt-5 items-center justify-center"
        style={[rStyle]}
      >
        <Text className="text-white">{item.id}</Text>
      </Animated.View>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
