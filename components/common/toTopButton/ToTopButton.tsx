import React from "react";
import { FlatList, Modal, Pressable, Text } from "react-native";
import styles from "./toTopButton.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const ToTopButton = ({flatListRef}) => {

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }

  return (
    <Pressable style={styles.toTopButton} onPress={() => scrollToTop()}>
      <AntDesign style={styles.toTopIcon} name="totop" />
      <Text style={styles.toTopText}>To Top</Text>
    </Pressable>
  );
};

export default ToTopButton;
