import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ProductDetail() {
  const router = useRouter();
  const { name, price, image } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <Ionicons name="heart-outline" size={24} color="#000" />
      </View>

      {/* Coffee Image */}
      <Image source={require("../assets/images/macchiato.jpg")} style={styles.productImage} />


      {/* Name & Rating */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.subText}>Ice/Hot</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#FFA500" />
          <Text style={styles.ratingText}>4.8</Text>
          <Text style={styles.ratingCount}>(230)</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk...
          <Text style={styles.readMore}> Read More</Text>
        </Text>
      </View>

      {/* Size Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {["S", "M", "L"].map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sizeButton, size === "M" && styles.activeSize]}
            >
              <Text style={[styles.sizeText, size === "M" && styles.activeSizeText]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Price & CTA */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={() => router.push("/order")}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10, paddingTop: 40 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "#000" },
  productImage: { width: "100%", height: 250, borderRadius: 12, marginBottom: 20 },
  infoContainer: { paddingHorizontal: 20 },
  productName: { fontSize: 22, fontWeight: "bold", color: "#000" },
  subText: { fontSize: 14, color: "#7E7B7B", marginVertical: 4 },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  ratingText: { marginLeft: 6, fontSize: 16, fontWeight: "bold", color: "#000" },
  ratingCount: { marginLeft: 4, fontSize: 14, color: "#7E7B7B" },
  section: { paddingHorizontal: 20, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 6 },
  description: { fontSize: 14, color: "#7E7B7B", lineHeight: 20 },
  readMore: { color: "#C67C4E", fontWeight: "bold" },
  sizeContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  sizeButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  activeSize: { borderColor: "#C67C4E", backgroundColor: "#FBEAE0" },
  sizeText: { fontSize: 16, color: "#000" },
  activeSizeText: { color: "#C67C4E", fontWeight: "600" },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  priceLabel: { color: "#7E7B7B", fontSize: 14 },
  priceValue: { color: "#C67C4E", fontSize: 22, fontWeight: "bold" },
  buyButton: { backgroundColor: "#C67C4E", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 30 },
  buyButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
