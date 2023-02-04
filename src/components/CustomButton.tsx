import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  text: string;
}

export const CustomButton = ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
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
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
