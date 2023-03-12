import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Logo from "../screenComponent/Logo.js";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import Bottom from "../screenComponent/Bottom.js";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

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
          Tạo tài khoản
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: "5%",
          width: "80%",
          height: "100%",
        }}
      >
        <View style={styles.input}>
          <FontAwesome5
            name="user"
            size={18}
            color="#ADA4A5"
            style={{ padding: 10 }}
          />
          <TextInput
            onChangeText={(text) => setInput(text)}
            placeholder="Tên"
            style={{
              color: "#ADA4A5",
              width: "100%",
            }}
          />
        </View>
        <View style={styles.input}>
          <Feather
            name="phone"
            size={18}
            color="#ADA4A5"
            style={{ padding: 10 }}
          />
          <TextInput
            onChangeText={(text) => setInput(text)}
            placeholder="Sô điện thoại"
            style={{
              color: "#ADA4A5",
              width: "100%",
            }}
          />
        </View>
        <View style={styles.input}>
          <Ionicons
            name="ios-mail-outline"
            size={18}
            color="#ADA4A5"
            style={{ padding: 10 }}
          />
          <TextInput
            onChangeText={(text) => setInput(text)}
            placeholder="Email"
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
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.paragraph}>
            By continuing you accept our Privacy Policy and Term of Use
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Đăng ký</Text>
        </TouchableOpacity>
        <View style={{ marginTop: "5%" }}>
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
            <Text>Bạn đã có tài khoản?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={{ color: "#7B61FF" }}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
  section: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
  },
  checkbox: {
    marginTop: "6%",
    color: "#ADA4A5",
  },
  paragraph: {
    color: "#ADA4A5",
    fontSize: 10,
    marginTop: "6%",
    marginLeft: "6%",
  },
  btn: {
    marginTop: "6%",
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
