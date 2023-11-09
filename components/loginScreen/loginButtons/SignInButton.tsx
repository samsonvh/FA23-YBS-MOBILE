import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./signInButton.style";
import { handleLogin } from "requests/handleLogin";
import { Redirect, router } from "expo-router";
import { useSession } from "@components/auth/AuthContext";
import { loginInformation } from "requests/interfaces";

const SignInButton = ({ email, password }: loginInformation) => {
  const { signIn } = useSession();
  
  return (
    <Pressable
      style={styles.signInButton}
      onPress={() => {
        signIn({ email, password });
        router.replace("/home");
      }}
    >
      <Text style={styles.signButtonText}>Sign In</Text>
    </Pressable>
  );
};

export default SignInButton;
