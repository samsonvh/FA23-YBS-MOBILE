import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./moreButton.style";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const MoreButton = () => {
  return (
    <Link href="/home/routes" asChild>
      <Pressable style={styles.moreButton}>
        <Text style={styles.moreButtonText}>More</Text>
        <Feather style={styles.moreButtonIcon} name="arrow-up-right" />
      </Pressable>
    </Link>
  );
};

export default MoreButton;
