import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

interface Props {
  text: string;
  onPress?: TouchableOpacityProps["onPress"];
  loading?: boolean;
}

export const CustomButton = ({ text, onPress, loading }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={styles.text}>
        {loading ? <ActivityIndicator size="small" color="white" /> : text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: "deepskyblue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
