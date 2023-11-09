import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./searchButton.style";
import { AntDesign } from "@expo/vector-icons";

const SearchButton = () => {
  return (
    <Pressable style={styles.searchButton}>
      <AntDesign style={styles.searchButtonIcon} name="search1" />
      <Text style={styles.searchButtonText}>Search</Text>
    </Pressable>
  );
};

export default SearchButton;
