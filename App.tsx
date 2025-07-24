import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const Stack = createNativeStackNavigator();

function OnboardingScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Full-screen background image */}
      <Image
        source={require("./assets/images/coffee-hero.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      {/* Overlay content */}
      <View style={{ position: "absolute", bottom: 60, width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", textAlign: "center" }}>
          Coffee in Blissful Delight!
        </Text>
        <Text style={{ fontSize: 16, color: "#ccc", textAlign: "center", marginTop: 10, paddingHorizontal: 30 }}>
          Welcome to our cozy coffee corner, where every cup is crafted to delight.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#C67C4E",
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 25,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to Coffee Shop Cheri!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
