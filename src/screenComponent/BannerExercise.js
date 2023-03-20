import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BannerExercise = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/img/bannerdetail.png")}
        style={{ width: "100%", position: "absolute" }}
      />
      <View
        style={{
          width: "90%",
          marginVertical: "10%",
          alignSelf: "center",
          alignContent: "center",
        }}
      >
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
            alignContent: "center",
            alignItems: "center",
            marginTop: "4%",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            4 động tác khởi động để bắt đầu luyện tập cho bất cứ môn thể thao
            nào
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BannerExercise;
