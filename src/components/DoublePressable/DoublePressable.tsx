import { View, Text, Pressable, PressableProps } from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";

interface DoublePressableProps extends PressableProps {
  onDoublePress?: () => void;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: PropsWithChildren<DoublePressableProps>) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 400) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
