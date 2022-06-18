import { View, Text, Pressable } from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";

interface DoublePressableProps {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: PropsWithChildren<DoublePressableProps>) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
