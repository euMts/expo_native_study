import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiInfoScreen from "./screens/ApiInfoScreen";
import LiquidAnimation from "./screens/LiquidAnimation";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
          <Stack.Screen name="Api Info" component={ApiInfoScreen} />
          <Stack.Screen name="Liquid animation" component={LiquidAnimation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }