import React from "react";
import { Text, View } from "react-native";
import styles from "./welcomeSection.style";
import { useSession } from "@components/auth/AuthContext";

const WelcomeSection = () => {
  return (
    <View>
      <Text style={styles.welcomeTitle}>Welcome to YBS</Text>
      <Text style={styles.welcomeSlogan}>slogan</Text>
    </View>
  );
};

export default WelcomeSection;
