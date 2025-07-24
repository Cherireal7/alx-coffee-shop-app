// app/index.tsx
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Image
        source={require("../assets/images/coffee-hero.png")} // Add image in assets/images
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      <View style={{ position: "absolute", bottom: 60, width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", textAlign: "center" }}>
          Coffee in Blissful Delight!
        </Text>
        <Text style={{ fontSize: 16, color: "#ccc", textAlign: "center", marginTop: 10, paddingHorizontal: 30 }}>
          Welcome to our cozy coffee corner, where every cup is crafted to delight.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/home")}
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
