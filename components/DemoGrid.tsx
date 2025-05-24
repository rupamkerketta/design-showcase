import React from "react";
import { FlatList } from "react-native-gesture-handler";
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
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DemoCard title={item.title} imageUrl={item.imageUrl} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          marginTop: 12,
          marginBottom: 12,
        }}
        className="px-5 py-20 bg-slate-900"
      />
    );
  }
};

export default DemoGrid;
