# alx-coffee-shop-app


A modern **coffee ordering mobile application** built with **React Native (Expo)**, inspired by a clean Figma design. This app allows users to browse coffee types, view product details, add favorites, track deliveries with live maps, and place orders — all in a seamless and user-friendly UI.

---

## 🚀 **Features**
- **Home Screen:**  
  Browse coffee categories and products with a clean grid layout.
  
- **Product Details:**  
  View detailed information about each coffee product (name, price, rating, size options, and description).
  
- **Favorites Page:**  
  Save and manage favorite coffee items.

- **Order Page:**  
  View your current and past orders.

- **Delivery Tracking:**  
  Real-time location tracking using `react-native-maps` and `expo-location`, with courier info and a call button for quick contact.

- **Modern UI:**  
  Inspired by a Figma design with a focus on coffee-shop aesthetics.

---

## 🛠 **Tech Stack**
- **Framework:** React Native (Expo)
- **Navigation:** Expo Router (Tabs + Stack navigation)
- **UI Styling:** React Native `StyleSheet`
- **Maps:** `react-native-maps` with `expo-location`
- **Icons:** `@expo/vector-icons` (Ionicons, Feather, MaterialIcons)
- **State Management:** React hooks (`useState`, `useEffect`)
- **Platform Support:** Android & iOS

---

## 📂 **Folder Structure**
app/
(tabs)/
home.tsx # Home Screen (product grid)
order.tsx # Order screen
favorites.tsx # Favorites screen
ProductDetail.tsx # Product detail page
DeliveryTracking.tsx # Delivery tracking with maps

constants/
data.ts # Coffee product data
imageMap.ts # Image mapping for products

assets/
images/ # Coffee images
icons/ # App icons

yaml
Copy
Edit

---

## ⚙️ **Getting Started**

### **1. Clone the repo:**
```bash
git clone https://github.com/<your-username>/alx-coffee-shop-app.git
cd alx-coffee-shop-app
2. Install dependencies:
bash
Copy
Edit
npm install
3. Start the Expo server:
bash
Copy
Edit
npx expo start
4. Run on a device:
Use the Expo Go app (scan the QR code).

Or use an Android/iOS emulator.

🔍 Development Process
Step 1: UI Layout
Translated Figma designs into React Native components.

Built Home, Favorites, Order, and Product Details screens.

Step 2: Data Management
Created data.ts to hold coffee products.

Used imageMap.ts to resolve dynamic images for product cards.

Step 3: Navigation
Implemented Tab Navigation with expo-router.

Added stack routing for ProductDetail and DeliveryTracking pages.

Step 4: Delivery Tracking
Integrated react-native-maps.

Implemented live location updates using expo-location and watchPositionAsync.

Added courier info and a "Call Courier" button.

⚠️ Challenges & Solutions
1. Dynamic Image Loading Issue
Problem: require() doesn't support dynamic strings.

Solution: Created a mapping file (imageMap.ts) with static require paths.

2. Safe Area White Gaps
Problem: White gaps appeared due to device notches.

Solution: Used SafeAreaProvider and useSafeAreaInsets to ensure proper padding.

3. Map Centering & Region Control
Problem: The map would not re-center on user location.

Solution: Switched from initialRegion to controlled region state.

🌱 Future Improvements
Add a Cart & Checkout flow.

Backend integration (Firebase or Supabase).

Push notifications for order updates.

More animations (fade-in cards, transitions).

Persistent favorites using AsyncStorage.