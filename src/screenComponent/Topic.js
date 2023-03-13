import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const Topic = () => {
  const list = [
    {
      id: 1,
      title: "Tổng hợp",
      img: require("../storages/img/topic/tonghop.png"),
    },
    {
      id: 2,
      title: "Chạy",
      img: require("../storages/img/topic/chay.png"),
    },
    {
      id: 3,
      title: "Bóng đá",
      img: require("../storages/img/topic/dabong.png"),
    },
    {
      id: 4,
      title: "Bơi",
      img: require("../storages/img/topic/boi.png"),
    },
    {
      id: 5,
      title: "Khác",
      img: require("../storages/img/topic/khac.png"),
    },
  ];

  return list.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{ marginHorizontal: 9, justifyContent: "center" }}
      >
        <Image source={data.img} />
        <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "500" }}>
          {data.title}
        </Text>
      </View>
    );
  });
};

export default Topic;
