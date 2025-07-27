import React, { useState }  from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Modal, Pressable   } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { coffeeItems } from "../../constants/data";
import { imageMap } from "../../constants/imageMap";
type CoffeeItem = {
  name: string;
  price: string;
  image: any; // Use `any` because require() returns a number in React Native.
};



export default function HomeScreen() {
  const insets = useSafeAreaInsets(); // Safe area padding
  const [activeCategory, setActiveCategory] = useState("All Coffee");
 const [selectedItem, setSelectedItem] = useState<CoffeeItem | null>(null);



  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        {/* Top dark rectangle */}
        <View style={styles.header}>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.locationValue}>Bilzen, Tanjungbalai</Text>
        </View>

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
                {/* Search bar (below header) */}
        
          <Image
              style={styles.banner}    
              source={require("../../assets/images/coffeebanner.png")}
          
        ></Image>

      {/* Categories horizontal scroll with active highlight */}
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

  {/* Coffee Product Cards */}
<ScrollView style={styles.productList} showsVerticalScrollIndicator={false}>
  <View style={styles.cardRow}>
    {coffeeItems.map((coffee, index) => (
      <TouchableOpacity
        key={index}
        style={styles.card}
        onPress={() => setSelectedItem(coffee)}
      >
        <Image source={imageMap[coffee.image]} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{coffee.name}</Text>
        <Text style={styles.cardPrice}>{coffee.price}</Text>
      </TouchableOpacity>
    ))}
  </View>
</ScrollView>


 {/* Modal for Order Details */}
      <Modal
        visible={!!selectedItem}
        animationType="slide"
        transparent={false}
      >
        <ScrollView contentContainerStyle={styles.modalContent}>
          {selectedItem && (
            <>
              <Image source={selectedItem.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedItem.name}</Text>
              <Text style={styles.modalPrice}>{selectedItem.price}</Text>

              <Text style={styles.modalDescription}>
                A {selectedItem.name} is a delightful coffee beverage made with
                carefully selected beans and fresh milk. Tap "Buy Now" to order!
              </Text>

              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => setSelectedItem(null)}
              >
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedItem(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </Modal>

</View>

        
      </View>
      


      
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    backgroundColor: "#734428",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  locationLabel: {
    color: "white",
    fontSize: 14,
    opacity: 1,
  },
  locationValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  searchContainerParent: {
    position: "absolute",
    zIndex: 70,
    top: 170,
    width: "100%",
    display: "flex",
    alignItems: "center"
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // transparent white
    borderRadius: 16,
    marginTop: 16,
    paddingHorizontal: 40,
    height: 40,
    
    width:"90%",

     // Shadow (foam effect)
  shadowColor: "#fff",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  // elevation: 5, // Android shadow
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.3)",

  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
  },
  banner: {
    bottom: 0,
    padding:10,
    width:360,
    height:80,
  },

  categoryContainer: {
  marginTop: 10,
},
categoryScroll: {
  paddingHorizontal: 20,
},
categoryItem: {
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: "#F3F3F3",
  borderRadius: 20,
  marginRight: 10,
},
categoryText: {
  fontSize: 14,
  color: "#333",
  fontWeight: "500",
},

activeCategoryItem: {
  backgroundColor: "#C67C4E",
},
activeCategoryText: {
  color: "#fff",
  fontWeight: "bold",
},
productList: {
  marginTop: 20,
  paddingHorizontal: 20,
},
cardRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},
card: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 12,
  width: "48%", // Two cards per row
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
cardTitle: {
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
  marginBottom: 4,
},
cardPrice: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#C67C4E",
},
addButton: {
  marginTop: 8,
  backgroundColor: "#C67C4E",
  borderRadius: 20,
  width: 32,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
},
addButtonText: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
},
modalContent: {
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    color: "#C67C4E",
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: "#C67C4E",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 10,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  closeButton: {
    paddingVertical: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: "red",
  },




});


