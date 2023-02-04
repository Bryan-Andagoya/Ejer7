import { createStackNavigator } from "@react-navigation/stack";

import { useUserStore } from "../hooks";
import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

export type StackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export const StackNavigator = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
