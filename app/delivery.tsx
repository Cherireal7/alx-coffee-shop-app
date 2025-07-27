import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  Alert,
  Dimensions,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { useRouter } from "expo-router";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function DeliveryTracking() {
  const router = useRouter();
  const mapRef = useRef<MapView>(null);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [region, setRegion] = useState<Region | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [followUser, setFollowUser] = useState(true);

  // Bottom sheet animation
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT * 0.4)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(SCREEN_HEIGHT * 0.4 + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.spring(translateY, { toValue: SCREEN_HEIGHT * 0.6, useNativeDriver: true }).start();
        } else {
          Animated.spring(translateY, { toValue: SCREEN_HEIGHT * 0.4, useNativeDriver: true }).start();
        }
      },
    })
  ).current;

  // Animate progress bar
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0.7,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  // Live location tracking
  useEffect(() => {
    let subscriber: Location.LocationSubscription | null = null;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setPermissionDenied(true);
        Alert.alert("Permission Denied", "Location access is required for live tracking.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      subscriber = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (loc) => {
          if (followUser) {
            setRegion((prev) => ({
  latitude: loc.coords.latitude,
  longitude: loc.coords.longitude,
  latitudeDelta: prev?.latitudeDelta ?? 0.01,
  longitudeDelta: prev?.longitudeDelta ?? 0.01,
}));

          }
        }
      );
    })();

    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [followUser]);

  // Recenter Button
  const handleRecenter = () => {
    if (region && mapRef.current) {
      setFollowUser(true);
      mapRef.current.animateToRegion(region, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/(tabs)/order")}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Map */}
      <View style={{ flex: 1 }}>
        {permissionDenied ? (
          <View style={styles.mapFallback}>
            <Text style={{ fontSize: 16, color: "#333", textAlign: "center" }}>
              Location permission is required to track your delivery.
            </Text>
          </View>
        ) : (
          <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            showsUserLocation={true}
            region={region || {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onRegionChange={() => setFollowUser(false)}
          >
            {region && (
              <Marker
                coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                title="Your Location"
                pinColor="blue"
              />
            )}
          </MapView>
        )}

        {/* Recenter Button */}
        <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter}>
          <Ionicons name="locate-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.etaText}>10 minutes left</Text>
        <Text style={styles.addressText}>Delivery to Jl. Kpg Sutoyo</Text>

        {/* Progress Bar */}
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
        </View>

        {/* Order Status */}
        <View style={styles.statusCard}>
          <Ionicons name="bicycle" size={24} color="#C67C4E" style={styles.statusIcon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.statusTitle}>Delivering your order</Text>
            <Text style={styles.statusDesc}>
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        {/* Courier Info */}
        <View style={styles.courierRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../assets/images/latte.png")} style={styles.courierImage} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL(`tel:${"+251989932714"}`)}>
            <Ionicons name="call-outline" size={20} color="#C67C4E" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  mapFallback: { flex: 1, justifyContent: "center", alignItems: "center" },
  recenterButton: {
    position: "absolute",
    bottom: 150,
    right: 20,
    backgroundColor: "#C67C4E",
    padding: 10,
    borderRadius: 25,
    elevation: 4,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 250,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 99,
  },
  etaText: { fontSize: 18, fontWeight: "bold", textAlign: "center", color: "#000" },
  addressText: { fontSize: 14, color: "#7E7B7B", textAlign: "center", marginVertical: 8 },
  progressBarBackground: {
    width: "100%",
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 12,
  },
  progressBarFill: { height: "100%", backgroundColor: "#4CAF50", borderRadius: 3 },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 20,
  },
  statusIcon: { marginRight: 12 },
  statusTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  statusDesc: { fontSize: 14, color: "#7E7B7B" },
  courierRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  courierImage: { width: 50, height: 50, borderRadius: 25 },
  courierName: { fontSize: 16, fontWeight: "bold", color: "#000" },
  courierRole: { fontSize: 14, color: "#7E7B7B" },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C67C4E",
    justifyContent: "center",
    alignItems: "center",
  },
});
