import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { coffeeItems } from "../../constants/data";
import { imageMap } from "../../constants/imageMap";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState("All Coffee");
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.locationValue}>Bilzen, Tanjungbalai</Text>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainerParent}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
            <TextInput
              placeholder="Search for coffee..."
              placeholderTextColor="#FFFFFF"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Banner */}
        {/* <Image
          style={styles.banner}
          source={require("../../assets/images/coffeebanner.png")}
        /> */}

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {["All Coffee", "Latte", "Macchiato", "Cappuccino", "Americano"].map(
              (item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryItem,
                    activeCategory === item && styles.activeCategoryItem,
                  ]}
                  onPress={() => setActiveCategory(item)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      activeCategory === item && styles.activeCategoryText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Product List */}
        <ScrollView style={styles.productList} showsVerticalScrollIndicator={false}>
          <View style={styles.cardRow}>
            {coffeeItems.map((coffee, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "/ProductDetail",
                    params: {
                      name: coffee.name,
                      price: coffee.price,
                      image: imageMap[coffee.image],
                    },
                  })
                }
              >
                {imageMap[coffee.image] ? (
                  <Image source={imageMap[coffee.image]} style={styles.cardImage} />
                ) : (
                  <Text style={{ color: "red" }}>Image Missing</Text>
                )}
                <Text style={styles.cardTitle}>{coffee.name}</Text>
                <Text style={styles.cardPrice}>{coffee.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    width: "100%",
    backgroundColor: "#734428",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  locationLabel: { color: "white", fontSize: 14 },
  locationValue: { color: "white", fontSize: 20, fontWeight: "bold" },
  searchContainerParent: {
    position: "absolute",
    zIndex: 70,
    top: 170,
    width: "100%",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    paddingHorizontal: 40,
    height: 40,
    width: "90%",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: "#FFFFFF" },
  banner: { bottom: 0, padding: 10, width: 360, height:0 },
  categoryContainer: { marginTop: 10 },
  categoryScroll: { paddingHorizontal: 20 },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: { fontSize: 14, color: "#333", fontWeight: "500" },
  activeCategoryItem: { backgroundColor: "#C67C4E" },
  activeCategoryText: { color: "#fff", fontWeight: "bold" },
  productList: { marginTop: 20, paddingHorizontal: 20 },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    width: "48%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "cover",
  },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 4 },
  cardPrice: { fontSize: 14, fontWeight: "bold", color: "#C67C4E" },
});
