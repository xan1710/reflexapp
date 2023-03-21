import { View, Text, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View
      style={{
        width: "90%",
        marginTop: "15%",
        marginHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 125,
          borderWidth: 1,
          backgroundColor: "#FAFAFA",
          borderColor: "#E6E6E6",
          borderRadius: 14,
        }}
      >
        <Text
          style={{
            width: "60%",
            marginLeft: "5%",
            marginTop: "2%",
            fontWeight: "600",
            color: "#565B73",
          }}
        >
          BALANCE - giúp bạn tránh nguy cơ gặp chấn thương và giúp cơ thể hồi
          phục trước và sau khi hoạt động mạnh
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: "28%",
            height: 35,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
            marginTop: "2%",
            backgroundColor: "#F4F9FF",
            borderColor: "#D6E5F3",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#5193E1" }}>
            Khởi động
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          left: "59%",
          bottom: "1%",
          width: "50%",
        }}
      >
        <Image
          source={require("../storages/img/banner.png")}
          style={{ height: 200, width: 150 }}
        />
      </View>
    </View>
  );
};

export default Banner;
