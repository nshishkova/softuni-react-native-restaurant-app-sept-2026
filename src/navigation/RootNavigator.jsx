import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { Text } from "react-native";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import InfoScreen from "../screens/InfoScreen";

export default function RootNavigator() {
  // Create the bottom tab navigator
  const Tabs = createBottomTabNavigator();

  //const Tabs = createNativeBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeTab" component={HomeNavigator} options={{ headerShown: false }} />
      <Tabs.Screen name="CartTab" component={CartNavigator} options={{ headerShown: false }} />
      <Tabs.Screen name="Info" component={InfoScreen} />
    </Tabs.Navigator>
  );
}