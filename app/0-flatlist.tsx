import React from "react";
import { FlatList, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";

// Containers and Components ----------------------------------------
import ListItem from "@/components/ListItem";
// ------------------------------------------------------------------

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

const AnimatedFlatList0 = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View className="flex-1">
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 40 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
};

export default AnimatedFlatList0;
