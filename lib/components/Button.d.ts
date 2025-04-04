import React from "react";
import { PressableProps } from "react-native";
export interface ButtonProps extends PressableProps {
    title: string;
    textClassName?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
