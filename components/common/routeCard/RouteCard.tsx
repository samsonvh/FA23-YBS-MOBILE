import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./routeCard.style";
import { routeListItem } from "requests/interfaces";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const RouteCard = (props: { item: routeListItem }) => {
  const detailRoutePath = "/home/routes/" + props.item.id;

  return (
    <Pressable
      style={styles.routeCard}
      onPress={() => router.push({ pathname: detailRoutePath })}
    >
      <Image
        style={styles.cardImage}
        source={{ uri: props.item.image }}
        resizeMode="cover"
      />
      <View style={styles.cardInfor}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.location}>{props.item.location}</Text>
          <Text style={styles.cardTitle}>{props.item.name}</Text>
        </View>
        <View style={styles.routeInformation}>
          <View style={styles.departsContainer}>
            <Text style={styles.label}>Departs</Text>
            <Text style={styles.text}>{props.item.departs}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.label}>Rating</Text>
            <View style={styles.ratingInfor}>
              <Text style={styles.text}>0</Text>
              <FontAwesome style={styles.ratingIcon} name="star" />
            </View>
          </View>
          <View style={styles.priceContainer}>
            {/* <Text style={styles.label}>Price</Text> */}
            <Text style={styles.price}>{props.item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RouteCard;
