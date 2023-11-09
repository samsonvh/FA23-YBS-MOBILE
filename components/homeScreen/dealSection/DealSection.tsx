import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import styles from "./dealSection.style";
import MoreButton from "./moreButton/MoreButton";
import { routeListItem } from "requests/interfaces";
import { getRouteDeals } from "requests/routes";
import RouteCard from "@components/common/routeCard/RouteCard";

const DealSection = () => {
  const [dealListWidth, setDealListWidth] = useState<number>();
  const [routeDeals, setRouteDeals] = useState<routeListItem[]>();

  useEffect(() => {
    const loadDeals = async () => {
      setRouteDeals(await getRouteDeals());
    };
    loadDeals().catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.dealSection}>
      <View style={styles.sectionHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Featured Deals</Text>
          <Text style={styles.slogan}>slogan</Text>
        </View>
        <View style={styles.moreButtonContainer}>
          <MoreButton />
        </View>
      </View>
      <FlatList
        style={styles.routeDealList}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setDealListWidth(width);
        }}
        horizontal={true}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={dealListWidth}
        pagingEnabled
        data={routeDeals}
        renderItem={(item) => <RouteCard item={item.item} />}
      ></FlatList>
    </View>
  );
};

export default DealSection;
