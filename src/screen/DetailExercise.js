import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BannerExercise from "../screenComponent/BannerExercise";
import { Foundation } from "@expo/vector-icons";
import ExerciseList from "../screenComponent/ExerciseList";

const DetailExercise = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            paddingBottom: "20%",
          }}
        >
          <BannerExercise />
          <View style={{ width: "89%", alignSelf: "center", flex: 1 }}>
            <Text
              style={{
                textAlign: "justify",
                fontStyle: "italic",
                lineHeight: 18,
              }}
            >
              Bài khởi động Cardio gồm 4 động tác, mỗi động tác trong vòng 15s,
              thực hiện lần lượt 4 động tác, sau đó lặp lại chu trình 1 lần nữa.
            </Text>
          </View>
          <View style={{ marginTop: "1%" }}>
            <ExerciseList />
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

export default DetailExercise;

const styles = StyleSheet.create({
  btn: {
    marginTop: "9%",
    width: "90%",
    backgroundColor: "#7B61FF",
    height: "6%",
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
