import { View, Text } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View
      style={{
        marginTop: "10%",
        justifyContent: "center",
        alignSelf: "center",
        width: "63%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          lineHeight: 48,
          fontWeight: "700",
          color: "#5193E1",
          textTransform: "uppercase",
        }}
      >
        Balance
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          lineHeight: 16.8,
          fontWeight: "400",
          marginTop: "4%",
          color: "#3E445F",
        }}
      >
        Giúp bạn luyện tập thể thao một cách an toàn và hiệu quả nhất!
      </Text>
    </View>
  );
};

export default Logo;
