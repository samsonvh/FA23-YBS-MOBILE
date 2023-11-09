import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: "Yacht Booking System",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0B4D8F",
        },
        headerShadowVisible: false,
      }}
    />
  );
};

export default _layout;
