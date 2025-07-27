import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function OrderScreen() {
  const [deliveryOption, setDeliveryOption] = useState<"Deliver" | "Pick Up">(
    "Deliver"
  );
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/ProductDetail")}>
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Delivery / Pick Up Toggle */}
      <View style={styles.toggleContainer}>
        {["Deliver", "Pick Up"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.toggleButton,
              deliveryOption === option && styles.activeToggleButton,
            ]}
            onPress={() => setDeliveryOption(option as "Deliver" | "Pick Up")}
          >
            <Text
              style={[
                styles.toggleText,
                deliveryOption === option && styles.activeToggleText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Delivery Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <Text style={styles.addressTitle}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressSubtitle}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
        <View style={styles.addressButtons}>
          <TouchableOpacity style={styles.outlineButton}>
            <Ionicons name="pencil" size={16} color="#000" />
            <Text style={styles.outlineButtonText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineButton}>
            <Ionicons name="document-text-outline" size={16} color="#000" />
            <Text style={styles.outlineButtonText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Coffee Item */}
      <View style={styles.cartItem}>
        <Image
          source={require("../../assets/images/cappuccino.png")}
          style={styles.cartImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.cartTitle}>Caffe Mocha</Text>
          <Text style={styles.cartSubtitle}>Deep Foam</Text>
        </View>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Discount */}
      <View style={styles.discountContainer}>
        <Ionicons name="pricetag-outline" size={18} color="#C67C4E" />
        <Text style={styles.discountText}>1 Discount is Applies</Text>
        <Ionicons name="chevron-forward" size={18} color="#000" />
      </View>

      {/* Payment Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}> 140 ETB</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Delivery Fee</Text>
          <Text style={styles.deliveryFee}>
            <Text style={styles.strikeThrough}>50 ETB </Text> 30 ETB
          </Text>
        </View>
      </View>

      {/* Cash / Wallet */}
      <View style={styles.walletContainer}>
        <Ionicons name="wallet-outline" size={20} color="#C67C4E" />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.walletLabel}>Cash/Wallet</Text>
          <Text style={styles.walletAmount}>346 ETB</Text>
        </View>
        <Ionicons name="chevron-down" size={20} color="#000" />
      </View>

      {/* Order CTA */}
      <TouchableOpacity style={styles.orderButton} onPress={() => router.push("../delivery")} >
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10, paddingTop: 60 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "#000" },

  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },
  toggleButton: { flex: 1, paddingVertical: 10, alignItems: "center" },
  activeToggleButton: { backgroundColor: "#C67C4E" },
  toggleText: { fontSize: 16, color: "#000" },
  activeToggleText: { color: "#fff", fontWeight: "600" },

  section: { marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  addressTitle: { fontSize: 15, fontWeight: "600", color: "#000" },
  addressSubtitle: { color: "#7E7B7B", marginBottom: 10 },
  addressButtons: { flexDirection: "row", gap: 10 },
  outlineButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  outlineButtonText: { marginLeft: 6, color: "#000", fontSize: 14 },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
  cartImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  cartTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  cartSubtitle: { fontSize: 12, color: "#7E7B7B" },
  quantityControl: { flexDirection: "row", alignItems: "center" },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  quantityButtonText: { fontSize: 16, fontWeight: "600", color: "#000" },
  quantity: { marginHorizontal: 10, fontSize: 16, fontWeight: "600" },

  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginVertical: 10,
  },
  discountText: { flex: 1, marginLeft: 10, color: "#000", fontSize: 14 },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  priceLabel: { color: "#000", fontSize: 14 },
  priceValue: { color: "#000", fontSize: 14, fontWeight: "600" },
  deliveryFee: { color: "#000", fontSize: 14 },
  strikeThrough: { textDecorationLine: "line-through", color: "#7E7B7B" },

  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginVertical: 10,
  },
  walletLabel: { fontSize: 14, fontWeight: "600", color: "#000" },
  walletAmount: { color: "#C67C4E", fontSize: 14, fontWeight: "600" },

  orderButton: {
    backgroundColor: "#C67C4E",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  orderButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
