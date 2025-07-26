import React, { useState }  from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity   } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen() {
  const insets = useSafeAreaInsets(); // Safe area padding
  const [activeCategory, setActiveCategory] = useState("All Coffee");


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
            <Ionicons name="search" size={20} color="#4B3832" style={styles.searchIcon} />
            <TextInput
              placeholder="Search for coffee..."
              placeholderTextColor="#4B3832 "
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
    color: "#333",
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



});


