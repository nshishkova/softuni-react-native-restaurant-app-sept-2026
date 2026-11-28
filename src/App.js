import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import CartProvider from "./context/cart-context/CartProvider";

export default function App() {
  return (
    <CartProvider>
          <StatusBar style="auto" />
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

