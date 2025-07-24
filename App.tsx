import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Fullscreen Hero Image */}
      <Image
        source={require("./assets/images/coffee-hero.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Overlay content */}
      <View style={styles.overlay}>
        {/* Title */}
        <Text style={styles.title}>Coffee in Blissful Delight!</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Welcome to our cozy coffee corner, where every cup is a delightful
          experience for you.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay for better readability
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#C67C4E",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
