import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Logo from "../screenComponent/Logo";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Bottom from "../screenComponent/Bottom";
import { useNavigation } from "@react-navigation/native";

// const useTogglePasswordVisibility = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState(true);
//   const [rightIcon, setRightIcon] = useState("eye");

//   return {
//     passwordVisibility,
//     rightIcon,
//     handlePasswordVisibility,
//   };
// };

const LogIn = () => {
  const navigation = useNavigation();

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [input, setInput] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Logo />
      <View style={{ alignSelf: "center", marginTop: "8%" }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: "#565B73" }}>
          Đăng nhập
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: "20%",
          width: "80%",
          height: "100%",
        }}
      >
        <View style={styles.input}>
          <Ionicons
            name="ios-mail-outline"
            size={18}
            color="#ADA4A5"
            style={{ padding: 10 }}
          />
          <TextInput
            onChangeText={(text) => setInput(text)}
            placeholder="Email / Số điện thoại"
            style={{
              color: "#ADA4A5",
              width: "100%",
            }}
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons
            name="lock-outline"
            size={18}
            color="#ADA4A5"
            style={{ padding: 10 }}
          />
          <TextInput
            secureTextEntry={passwordVisibility}
            onChangeText={(text) => setInput(text)}
            placeholder="Mật khẩu"
            style={{
              color: "#ADA4A5",
              width: "80%",
            }}
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            enablesReturnKeyAutomatically
          />
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color="#ADA4A5"
            />
          </Pressable>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{ marginTop: "38%" }}>
          <Bottom />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <View>
            <Text>Bạn chưa có tài khoản?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push("SignIn")}>
            <Text style={{ color: "#7B61FF" }}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    height: "7%",
    borderColor: "#",
    borderWidth: 1,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#ADA4A5",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: "5%",
  },
  btn: {
    marginTop: "10%",
    width: "100%",
    backgroundColor: "#7B61FF",
    height: "8%",
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffff",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "700",
  },
});
