import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ExerciseList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const step = route.params.description;
  return route.params.description.map((data, index) => {
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
            onPress={() =>
              navigation.navigate("StepExercise", {
                title: data.title,
                content: data.content,
                video: data.video,
                img: data.img,
                step: step,
              })
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "10%",
              borderBottomWidth: 1,
              height: 120,
              width: "85%",
            }}
          >
            <Image
              source={data.img}
              style={{ marginRight: "10%", height: 60, width: 80 }}
            />
            <View>
              <Text
                style={{ fontSize: 16, marginBottom: "5%", fontWeight: "500" }}
              >
                {data.title}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                {data.set}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      </View>
    );
  });
};

export default ExerciseList;
