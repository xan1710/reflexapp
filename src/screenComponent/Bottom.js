import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Bottom = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              marginHorizontal: "2%",
            }}
          >
            Or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.btn}>
          <Image source={require("..//img/icon/google.png")} />
        </View>
        <View style={styles.btn}>
          <Image source={require("../img/icon/fb.png")} />
        </View>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.8,
    width: "15%",
    height: 50,
    borderRadius: 14,
    borderColor: "#DDDADA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "4%",
    marginTop: "5%",
  },
});
