import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { popularDestination } from "requests/interfaces";
import styles from "./popularCard.style";

const PopularCard = (props: { item: popularDestination }) => {
  return (
    <View style={styles.popularCard}>
      <ImageBackground
        style={styles.cardImage}
        source={{ uri: props.item.image }}
      >
        <View style={styles.cardOverlay}>
          <Text style={styles.cardTitle}>{props.item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PopularCard;
