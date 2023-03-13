import { View, Text, Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../screen/SignIn";
import LogIn from "../screen/LogIn";
import Home from "../screen/Home";
import Content from "../screen/Content";
import Exercises from "../screen/Exercises";
import Relaxtion from "../screen/Relaxtion";
import Bookmarks from "../screen/Bookmarks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const ContentStack = createNativeStackNavigator();
function ContentStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Content Stack" component={Content} />
    </HomeStack.Navigator>
  );
}

const ExercisesStack = createNativeStackNavigator();
function ExercisesStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Exercises Stack" component={Exercises} />
    </HomeStack.Navigator>
  );
}

const RelaxtionStack = createNativeStackNavigator();
function RelaxtionStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Relaxtion Stack" component={Relaxtion} />
    </HomeStack.Navigator>
  );
}

const BookmarksStack = createNativeStackNavigator();
function BookmarksStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Bookmarks Stack" component={Bookmarks} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#7B61FF",
          width: "100%",
          height: "10%",
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/img/icon/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FFFFFF" : "#D0CBF8",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Content"
        component={ContentStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/img/icon/content.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FFFFFF" : "#D0CBF8",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Exercises"
        component={ExercisesStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/img/icon/exercise.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FFFFFF" : "#D0CBF8",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Relaxtion"
        component={RelaxtionStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/img/icon/relax.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FFFFFF" : "#D0CBF8",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/img/icon/bookmark.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FFFFFF" : "#D0CBF8",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="SignIn" component={SignIn} />
        <Stacks.Screen name="Login" component={LogIn} />
        <Stacks.Screen name="Tabs" component={Tabs} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
