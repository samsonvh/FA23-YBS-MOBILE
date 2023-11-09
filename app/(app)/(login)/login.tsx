import OrDivider from "@components/loginScreen/divider/OrDivider";
import GoogleSignInButton from "@components/loginScreen/loginButtons/GoogleSignInButton";
import LoginForm from "@components/loginScreen/loginForm/LoginForm";
import Logo from "@components/loginScreen/logo/Logo";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import styles from "@components/loginScreen/loginScreen.style";
import WelcomeSection from "@components/loginScreen/welcome/WelcomeSection";
import { useSession } from "@components/auth/AuthContext";

const login = () => {
  const {isLoading, session} = useSession();

  if (session) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={styles.loginScreen}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.welcomeContainer}>
        <WelcomeSection/>
      </View>
      <View style={styles.loginContainer}>
        <LoginForm />
        <OrDivider />
        <GoogleSignInButton />
      </View>
    </View>
  );
};

export default login;
