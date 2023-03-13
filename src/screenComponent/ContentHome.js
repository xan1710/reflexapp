import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const ContentHome = () => {
  const list = [
    {
      id: 1,
      title: "Vai trò của việc khởi động trước tập",
      img: require("../storages/img/content1.png"),
    },
    {
      id: 2,
      title: "Vai trò của việc giãn cơ sau tập",
      img: require("../storages/img/content2.png"),
    },
  ];
  return list.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={data.img}
          style={{
            width: 159,
            height: 159,
          }}
        />
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.27)",
            width: 159,
            height: 159,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              textAlign: "center",
              width: "80%",
            }}
          >
            {data.title}
          </Text>
        </View>
      </View>
    );
  });
};

export default ContentHome;
