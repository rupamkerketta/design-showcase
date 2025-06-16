// src/components/Chat/Avatar.tsx
import React from "react";
import { Image, ImageStyle } from "react-native";

const avatarMap = {
  rick: require("@/assets/images/pickle-rick_avatar-min.png"),
  morty: require("@/assets/images/morty_avatar-min.png"),
};

type AvatarProps = {
  from: "rick" | "morty";
  style?: ImageStyle;
};

const Avatar = ({ from, style }: AvatarProps) => {
  return (
    <Image
      source={avatarMap[from]}
      style={[
        {
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: "#334155",
        },
        style,
      ]}
    />
  );
};

export default React.memo(Avatar);
