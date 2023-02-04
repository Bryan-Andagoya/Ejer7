import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CustomButton } from "../components";
import { useUserStore } from "../hooks";

export const HomeScreen = () => {
  const { user, logOutUser } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);

  const logOut = async () => {
    setLoading(true);
    await logOutUser();
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {user.email}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Log Out"
          onPress={loading ? undefined : logOut}
          loading={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  buttonContainer: {
    paddingVertical: 24,
    width: "70%",
  },
});
