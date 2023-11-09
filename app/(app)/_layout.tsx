import { SessionProvider } from "@components/auth/AuthContext";
import { Slot, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Layout = () => {
  return (
    <SessionProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarColor: "#0B4D8F",
        }}
      />
    </SessionProvider>
  );
};

export default Layout;
