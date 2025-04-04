import React from "react";
import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

export interface ButtonProps extends PressableProps {
  title: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  className,
  textClassName,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx("bg-red-700 p-4 rounded-lg items-center", className)}
      {...rest}
    >
      <Text className={clsx("text-white font-bold", textClassName)}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
