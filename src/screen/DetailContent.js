import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BannerDetail from "../screenComponent/BannerDetail";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailContent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            paddingBottom: "10%",
          }}
        >
          <BannerDetail />
          <View
            style={{
              width: "89%",
              alignSelf: "center",
              flex: 1,
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                textAlign: "justify",
                fontStyle: "italic",
                lineHeight: 18,
              }}
            >
              {route.params.firstContent}
            </Text>
          </View>
          <View>
            {route.params.description.map((data, index) => {
              return (
                <View key={data.id}>
                  <Image
                    source={data.img}
                    style={{
                      width: "90%",
                      alignSelf: "center",
                      height: 226,
                      flex: 1,
                      marginTop: "5%",
                    }}
                  />
                  <View
                    style={{
                      width: "90%",
                      alignSelf: "center",
                      marginTop: "8%",
                    }}
                  >
                    <Text style={{ marginBottom: "3%", fontWeight: "700" }}>
                      {data.title}
                    </Text>
                    <View>
                      <Text>{data.content}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push("ContentStack")}
          >
            <Text style={styles.text}>Xem các bài viết khác</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailContent;

const styles = StyleSheet.create({
  btn: {
    marginTop: "9%",
    width: "90%",
    backgroundColor: "#4B6AB9",
    height: 60,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "#ffff",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "700",
  },
});
