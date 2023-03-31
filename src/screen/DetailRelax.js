import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BannerRelax from "../screenComponent/BannerRelax";
import { Video } from "expo-av";

const DetailRelax = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const route = useRoute();
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
          <BannerRelax />
          <View>
            {route.params.description.map((data, index) => {
              return (
                <View key={data.id}>
                  <Video
                    ref={video}
                    style={{
                      alignSelf: "center",
                      width: 380,
                      height: 205,
                      marginTop: "5%",
                    }}
                    useNativeControls
                    resizeMode="contain"
                    source={data.video}
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
            onPress={() => navigation.push("Relaxtion Stack")}
          >
            <Text style={styles.text}>Xem các bài viết khác</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRelax;

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
