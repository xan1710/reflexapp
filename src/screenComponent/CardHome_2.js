import { View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const CardHome_2 = () => {
  const card = [
    {
      id: 1,
      title: "Tổng hợp các động tác giãn cơ cơ bản cho người chạy bộ",
      img: require("../storages/img/card4.png"),
    },
    {
      id: 2,
      title: "Giãn Cơ Sau Tập Gym",
      img: require("../storages/img/card5.png"),
    },
    {
      id: 3,
      title: "Bật mí 4 bài tập giúp bạn phục hồi sức lực sau khi bơi lội",
      img: require("../storages/img/card6.png"),
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          justifyContent: "flex-end",
          marginTop: "5%",
        }}
        key={data.id}
      >
        <View>
          <Image source={data.img} style={{ width: 375, height: 117 }} />
        </View>

        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.27)",
            borderRadius: 15,
            width: 376,
            height: 52,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "white",
              width: "85%",
              marginHorizontal: "8%",
            }}
          >
            {data.title}
          </Text>
        </View>
        <View style={{ position: "absolute", top: 5, right: 6 }}>
          <Feather name="bookmark" size={24} color="rgba(109, 133, 245, 1)" />
        </View>
      </View>
    );
  });
};

export default CardHome_2;
