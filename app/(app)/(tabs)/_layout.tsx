import { useSession } from "@components/auth/AuthContext";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

const _layout = () => {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#0B4D8F",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#0B4D8F",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: "My Bookings",
          tabBarLabel: "My Bookings",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
        }}
      />
    </Tabs>
  );
};

export default _layout;
