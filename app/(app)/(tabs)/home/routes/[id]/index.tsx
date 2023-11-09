import Gallery from "@components/common/gallery/Gallery";
import RouteDetailsScreenHeader from "@components/routeScreen/detailsScreen/header/RouteDetailsScreenHeader";
import OverviewSection from "@components/routeScreen/detailsScreen/overviewSection/OverviewSection";
import styles from "@components/routeScreen/detailsScreen/routeDetailsScreen.style";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const RouteDetailsPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.routeDetailsScreen}>
      <RouteDetailsScreenHeader />
      <Gallery />
      <OverviewSection />
    </ScrollView>
  );
};

export default RouteDetailsPage;
