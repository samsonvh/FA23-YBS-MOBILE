import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./routeDetailsScreenHeader.style";
import { AntDesign, Feather } from "@expo/vector-icons";

const RouteDetailsScreenHeader = () => {
  return (
    <View style={styles.routeDetailsScreenHeader}>
      <Text style={styles.routeName}>Name</Text>
      <View style={styles.headerFeaturesContainer}>
        <View style={styles.showMapButtonContainer}>
          <Pressable style={styles.showMapButton}>
            <Feather style={styles.showMapButtonIcon} name="map-pin" />
            <Text style={styles.showMapButtonText}>Show on Map</Text>
          </Pressable>
          <View style={styles.buttonFiller} />
        </View>
        <View style={styles.shareButtonContainer}>
          <Pressable style={styles.featureButton}>
            <AntDesign style={styles.shareButtonIcon} name="sharealt" />
            <Text style={styles.shareButtonText}>Share</Text>
          </Pressable>
        </View>
        <View style={styles.saveButtonContainer}>
          <Pressable style={styles.featureButton}>
            <AntDesign style={styles.saveButtonIcon} name="hearto" />
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RouteDetailsScreenHeader;
