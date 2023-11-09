import React from "react";
import { Image, View } from "react-native";
import styles from "./galleryCard.style";

const GalleryCard = (props: { uri: string }) => {
  return (
    <View style={styles.galleryCard}>
      <Image style={styles.cardImage} source={{ uri: props.uri }} />
    </View>
  );
};

export default GalleryCard;
