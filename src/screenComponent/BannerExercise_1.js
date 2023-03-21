import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BannerExercise_1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ flex: 1 }}>
      <Image source={route.params.img} style={{ width: "100%", height: 150 }} />
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          alignContent: "center",
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.27)",
          height: 150,
        }}
      >
        <View style={{ marginVertical: "10%", marginHorizontal: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "400",
                marginLeft: "2%",
              }}
            >
              Khởi động
            </Text>
          </View>
          <View
            style={{
              marginTop: "4%",
              marginLeft: "5%",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              {route.params.title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BannerExercise_1;
