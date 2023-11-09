import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./popularSection.style";
import { getPopularDestinations } from "requests/desinations";
import { popularDestination } from "requests/interfaces";
import PopularCard from "./popularCard/PopularCard";

const PopularSection = () => {
  const [popularDestinations, setPopularDestinations] =
    useState<popularDestination[]>();

  useEffect(() => {
    const loadPopularDestinations = async () => {
      setPopularDestinations(await getPopularDestinations());
    };
    loadPopularDestinations().catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.popularSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popular Destinations</Text>
        <Text style={styles.slogan}>slogan</Text>
      </View>
      <FlatList
        style={styles.popularDestinationList}
        data={popularDestinations}
        horizontal={true}
        renderItem={(item) => <PopularCard item={item.item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
      />
    </View>
  );
};

export default PopularSection;
