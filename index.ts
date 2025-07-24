import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface HomePageStyles {
  container: StyleProp<ViewStyle>;
  heroImage: StyleProp<ImageStyle>;
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  button: StyleProp<ViewStyle>;
  buttonText: StyleProp<TextStyle>;
}
