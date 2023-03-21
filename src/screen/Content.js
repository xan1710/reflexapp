import { View, Text, ScrollView } from "react-native";
import React from "react";
import CardContent from "../screenComponent/CardContent";
import { useNavigation } from "@react-navigation/native";

const Content = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: "8%" }}>
          <View style={{ marginLeft: "5%" }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                color: "#565B73",
                textTransform: "uppercase",
              }}
            >
              Bài Viết
            </Text>
          </View>
          <View>
            <CardContent />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Content;
