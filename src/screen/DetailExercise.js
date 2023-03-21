import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BannerExercise from "../screenComponent/BannerExercise";
import { Foundation } from "@expo/vector-icons";
import ExerciseList from "../screenComponent/ExerciseList";
import BannerExercise_1 from "../screenComponent/BannerExercise_1";

const DetailExercise = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            paddingBottom: "20%",
          }}
        >
          <BannerExercise_1 />
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
              {route.params.firstTitle}
            </Text>
          </View>
          <View style={{ marginTop: "1%" }}>
            <ExerciseList />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Exercises Stack")}
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
