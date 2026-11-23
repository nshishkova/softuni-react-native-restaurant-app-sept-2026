import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function HomeNavigator( {navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
            <Pressable onPress={() => navigation.navigate("CartTab")}>
              <Ionicons
                name="cart"
                size={24}
                color="black"
                style={{ marginRight: 16 }}
              />
            </Pressable>
          ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Menu" }}
      />
    </Stack.Navigator>
  );
}


