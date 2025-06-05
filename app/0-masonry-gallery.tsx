import { FlashList } from "@shopify/flash-list";
import React, { useMemo } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { demoData, MasonryItem } from "../data/masonry-demo-data";

const DATA = demoData;
const COLUMNS = 2;
const GAP = 8; // px
const H_PADDING = 16; // px (from "px-4" on ScrollView)

const SCREEN_WIDTH = Dimensions.get("window").width;
const TOTAL_GAP = GAP * (COLUMNS - 1);
const TOTAL_PADDING = H_PADDING * 2;
const COLUMN_WIDTH = (SCREEN_WIDTH - TOTAL_PADDING - TOTAL_GAP) / COLUMNS;

// MasonryCard is now defined here
const MasonryCard: React.FC<{ item: MasonryItem }> = ({ item }) => (
  <View
    className="w-full rounded-xl"
    style={{
      aspectRatio: item.aspectRatio,
      backgroundColor: item.color,
      minHeight: 80,
      maxHeight: 350,
    }}
  >
    <View className="flex-1 justify-center items-center">
      <Text className="text-white font-bold text-base">
        {item.width}×{item.height} ({item.id})
      </Text>
      <Text className="text-white text-xs mt-1">
        AR: {item.aspectRatio.toFixed(2)}
      </Text>
    </View>
  </View>
);

export const MasonryGallery = () => {
  // Split items into columns, balancing by total height
  const columnsData = useMemo(() => {
    const heights = Array(COLUMNS).fill(0);
    const cols: MasonryItem[][] = Array.from({ length: COLUMNS }, () => []);
    DATA.forEach((item) => {
      const shortest = heights.indexOf(Math.min(...heights));
      heights[shortest] += 1 / item.aspectRatio;
      cols[shortest].push(item);
    });
    return cols;
  }, []);

  return (
    <ScrollView
      contentContainerClassName="flex-row px-4"
      showsVerticalScrollIndicator={false}
    >
      {columnsData.map((col, idx) => (
        <View
          key={idx}
          style={{
            width: COLUMN_WIDTH,
            marginLeft: idx === 0 ? 0 : GAP,
          }}
        >
          <FlashList
            data={col}
            estimatedItemSize={150}
            scrollEnabled={false}
            renderItem={({ item }) => <MasonryCard item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MasonryGallery;
