import { Redirect, SplashScreen } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  return <Redirect href="/login"/>
};

export default index;
