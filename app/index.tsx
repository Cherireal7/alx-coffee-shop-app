import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

function OnboardingContent() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  <StatusBar translucent backgroundColor="transparent" style="light" />

  return (
    <SafeAreaView
      style={{
        flex: 1,
       
            width: "100%",
            backgroundColor: "#313131",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            // paddingHorizontal: 20,
            // paddingVertical: 20,
            height: 160, // Full height for top section

      }}
    >
      <ImageBackground
        source={require("../assets/images/coffee-hero.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 24,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Coffee in Blissful Delight!
          </Text>
          <Text
            style={{
              color: "#ddd",
              fontSize: 16,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Welcome to our cozy coffee corner, where every cup is a delightful
            experience for you.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#C67C4E",
              paddingVertical: 14,
              borderRadius: 30,
              alignItems: "center",
            }}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default function Onboarding() {
  return (
    <SafeAreaProvider>
      <OnboardingContent />
    </SafeAreaProvider>
  );
}
