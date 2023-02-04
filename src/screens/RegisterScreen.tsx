import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CustomButton, CustomTextInput } from "../components";
import { useUserStore } from "../hooks";
import { StackNavigatorParamList } from "../navigation";

interface Props extends StackScreenProps<StackNavigatorParamList, "Register"> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const { registerUser } = useUserStore();

  const goToLogin = () => {
    navigation.pop();
  };

  const register = async () => {
    if (email && password) {
      clearForm();
      setLoading(true);
      await registerUser(email, password);
      setLoading(false);
    } else {
      if (!email) {
        setEmailError("Field required");
      }

      if (!password) {
        setPasswordError("Field required");
      }
    }
  };

  const clearForm = () => {
    setEmail("");
    setEmailError("");
    setPassword("");
    setPasswordError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register</Text>
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
            error={emailError}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Sign Up" onPress={register} loading={loading} />
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity
            onPress={loading ? undefined : goToLogin}
            disabled={loading}
          >
            <Text style={styles.link}>Already have an account</Text>
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
