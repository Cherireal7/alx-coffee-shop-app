import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#fff"
      }}>
        <ImageBackground
          source={require("../assets/images/coffee-hero.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)", padding: 24 }}>
            <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 12 }}>
              Coffee in Blissful Delight!
            </Text>
            <Text style={{ color: "#ddd", fontSize: 16, textAlign: "center", marginBottom: 20 }}>
              Welcome to our cozy coffee corner, where every cup is a delightful experience for you.
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: "#C67C4E", paddingVertical: 14, borderRadius: 30, alignItems: "center" }}
              onPress={() => router.replace("/(tabs)/home")}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
