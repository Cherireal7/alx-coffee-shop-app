import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface HomePageStyles {
  container: StyleProp<ViewStyle>;
  heroImage: StyleProp<ImageStyle>;
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  button: StyleProp<ViewStyle>;
  buttonText: StyleProp<TextStyle>;
}
