import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};
export const COLORS = {
  bg: "#1F7D53",
  cardBg: "#18230F",
  second: "#27391C",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
};
export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};
