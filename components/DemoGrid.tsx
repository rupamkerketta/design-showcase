import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import DemoCard from "./DemoCard";

//  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png

const DATA = Array.from({ length: 1024 }).map((_, i) => ({
  id: String(i + 1),
  title: `#${i + 1}`,
  imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
}));

type DemoGridProps = { variant: "list" | "masonry" | "nested" };

const DemoGrid = ({ variant }: DemoGridProps) => {
  if (variant === "list") {
    return (
      <FlashList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DemoCard title={item.title} imageUrl={item.imageUrl} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 80,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 20, backgroundColor: "blue" }} />
        )}
        className="bg-slate-900"
        estimatedItemSize={179}
      />
    );
  }
};

export default DemoGrid;
