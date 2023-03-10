import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Logo from '../screenComponent/Logo.js';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

const SignIn = () => {
  const [input, setInput] = useState('');
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Logo />
      <View style={{ alignSelf: 'center', marginTop: '10%' }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: '#565B73' }}>
          Tạo tài khoản
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: '5%',
          width: '80%',
          height: '100%',
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
              color: '#ADA4A5',
              width: '100%',
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
              color: '#ADA4A5',
              width: '100%',
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
              color: '#ADA4A5',
              width: '100%',
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
            onChangeText={(text) => setInput(text)}
            placeholder="Mật khẩu"
            style={{
              color: '#ADA4A5',
              width: '100%',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    height: '7%',
    borderColor: '#',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#ADA4A5',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: '5%',
  },
});
