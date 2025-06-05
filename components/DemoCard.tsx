import React from "react";

import { Href, Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

const DemoCardView = ({
  title,
  imageUrl,
  onPress,
}: {
  title: string;
  imageUrl?: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-[30%] rounded-xl items-center justify-center bg-slate-800"
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-40"
          resizeMode="contain"
        />
      )}
      <View className={!imageUrl ? "h-40 items-center justify-center" : ""}>
        <Text className="text-lg text-center font-medium text-gray-300 mb-2">
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const DemoCard = ({
  title,
  imageUrl,
  href,
}: {
  title: string;
  imageUrl?: string;
  href?: Href;
}) => {
  // If href exists, use Link component with proper navigation
  if (href) {
    return (
      <Link href={href} asChild>
        <DemoCardView title={title} imageUrl={imageUrl} />
      </Link>
    );
  }

  // Otherwise, just return the card view without navigation
  return <DemoCardView title={title} imageUrl={imageUrl} />;
};

export default DemoCard;
