import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CustomButton, CustomTextInput } from "../components";
import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Login"> {}

export const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const goToRegister = () => {
    navigation.push("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your email"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Login" />
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.link}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  form: {
    paddingVertical: 30,
    width: "70%",
    alignSelf: "center",
  },
  inputContainer: {
    paddingVertical: 8,
  },
  buttonContainer: {
    paddingVertical: 24,
  },
  linkContainer: {
    justifyContent: "center",
  },
  link: {
    textAlign: "center",
    color: "deepskyblue",
    fontSize: 16,
    fontWeight: "500",
  },
});
