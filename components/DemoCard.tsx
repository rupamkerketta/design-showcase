import React from "react";
import { Image, Text, View } from "react-native";

const DemoCard = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <View className="w-[30%] rounded-xl items-center justify-center bg-slate-800">
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-40"
        resizeMode="contain"
      />
      <Text className="text-lg font-medium text-gray-300 mb-2">{title}</Text>
    </View>
  );
};

export default DemoCard;
