import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Sample favorite items (can later come from user data or state management)
const favoriteItems = [
  {
    id: "1",
    name: "Cappuccino",
    price: "140 ETB",
    image: require("../../assets/images/cappuccino.png"),
  },
  {
    id: "2",
    name: "Latte",
    price: "160 ETB",
    image: require("../../assets/images/latte.png"),
  },
  {
    id: "3",
    name: "Macchiato",
    price: "100 ETB",
    image: require("../../assets/images/macchiato.jpg"),
  },
];

export default function FavoritesScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState(favoriteItems);

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Favorites</Text>
      </View>

      {/* Favorites List */}
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => router.push("../order")}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromFavorites(item.id)}
              >
                <Ionicons name="trash-outline" size={20} color="#C67C4E" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={60} color="#C67C4E" />
          <Text style={styles.emptyText}>No favorites yet</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop:40 },
  header: { paddingVertical: 10 },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#333" },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    alignItems: "center",
  },
  cardImage: { width: 70, height: 70, borderRadius: 8, marginRight: 12 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#333" },
  cardPrice: { fontSize: 14, color: "#C67C4E", marginTop: 4 },
  removeButton: {
    backgroundColor: "#FCEEE5",
    padding: 8,
    borderRadius: 8,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    marginTop: 10,
  },
});
