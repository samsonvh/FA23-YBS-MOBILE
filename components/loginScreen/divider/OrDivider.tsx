import React from "react";
import { Text, View } from "react-native";
import styles from "./orDivider.style";
import DividerLine from "@components/common/divider/DividerLine";

const OrDivider = () => {
  return (
    <View style={styles.orDividerContainer}>
      <View style={styles.dividerContainer}>
        <DividerLine />
      </View>
      <Text style={styles.dividerText}>OR</Text>
      <View style={styles.dividerContainer}>
        <DividerLine />
      </View>
    </View>
  );
};

export default OrDivider;
