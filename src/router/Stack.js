import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../screen/SignIn";
import LogIn from "../screen/LogIn";
const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="SignIn" component={SignIn} />
        <Stacks.Screen name="Login" component={LogIn} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
