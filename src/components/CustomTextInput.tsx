import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props {
  hint: string;
  placeholder: TextInputProps["placeholder"];
  value: TextInputProps["value"];
  onChangeText: TextInputProps["onChangeText"];
  secureTextEntry?: TextInputProps["secureTextEntry"];
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  error?: string;
}

export const CustomTextInput = ({
  hint,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  error,
}: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <View style={styles.hintContainer}>
        <Text>{hint}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          isFocus && { borderColor: error ? "red" : "deepskyblue" },
        ]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  hintContainer: {
    paddingBottom: 8,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  errorContainer: {
    paddingTop: 2,
    alignItems: "center",
  },
  error: {
    color: "red",
  },
});
