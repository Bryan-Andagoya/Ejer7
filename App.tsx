import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { MainProvider } from "./src/context";
import { StackNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainProvider>
        <StackNavigator />
      </MainProvider>
    </NavigationContainer>
  );
}
