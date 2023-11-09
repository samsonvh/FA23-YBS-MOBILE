import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./loginForm.style";
import { TextInput } from "react-native-gesture-handler";
import SignInButton from "../loginButtons/SignInButton";

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.loginForm}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="ybs@mail.com"
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.forgotPasswordContainer}>
          <Pressable style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>
        </View>
      </View>
      <SignInButton email={email} password={password} />
    </View>
  );
};

export default LoginForm;
