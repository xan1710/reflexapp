import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import relax from "../data/relax";
import { useNavigation } from "@react-navigation/native";
import BannerRelax from "./BannerRelax";

const CardHome_2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      {relax.slice(0, 3).map((data, index) => {
        return (
          <View
            style={{
              flex: 1,
              alignSelf: "center",
              justifyContent: "flex-end",
              marginTop: "5%",
            }}
            key={index}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailRelax", {
                  img: data.img,
                  title: data.title,
                  firstContent: data.firstContent,
                  description: data.description,
                  id: data.id,
                  myComponent: <BannerRelax />,
                })
              }
            >
              <View>
                <Image
                  source={data.img}
                  style={{ width: 375, height: 130, borderRadius: 15 }}
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.27)",
                borderRadius: 15,
                left: 2,
                width: 372,
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
              <Feather
                name="bookmark"
                size={24}
                color="rgba(109, 133, 245, 1)"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CardHome_2;
