import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: "Post" }}
      />
    </Stack.Navigator>
  );
}
