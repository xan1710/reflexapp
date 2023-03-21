import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ExerciseList = () => {
  const navigation = useNavigation();
  const exercises = [
    {
      id: 1,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 2,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 3,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 4,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
  ];
  return exercises.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          width: "80%",
          alignSelf: "center",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Foundation name="list-bullet" size={24} color="black" />
        <>
          <TouchableOpacity
            onPress={() => navigation.push()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "10%",
              borderBottomWidth: 1,
              height: 120,
              width: "85%",
            }}
          >
            <Image source={data.img} style={{ marginRight: "10%" }} />
            <View>
              <Text>{data.title}</Text>
              <Text>{data.time}</Text>
            </View>
          </TouchableOpacity>
        </>
      </View>
    );
  });
};

export default ExerciseList;
