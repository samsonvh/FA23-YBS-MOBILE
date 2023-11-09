import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./profileSection.style";
import { Entypo } from "@expo/vector-icons";
import { useSession } from "@components/auth/AuthContext";

const ProfileSection = () => {
  const { isLoading, session } = useSession();

  return (
    <View style={styles.profileSection}>
      <Image
        style={styles.avatar}
        source={
          session.image
            ? { uri: session.image }
            : {
                uri: "https://placehold.co/400x400.png",
              }
        }
      />
      <View style={styles.inforContainer}>
        <Text style={styles.email}>{session.email}</Text>
        <Text style={styles.username}>{session.userName}</Text>
      </View>
      <View style={styles.wallet}>
        <Entypo name="wallet" size={24} color="white" />
        <Text style={styles.points}>0 Points</Text>
      </View>
    </View>
  );
};

export default ProfileSection;
