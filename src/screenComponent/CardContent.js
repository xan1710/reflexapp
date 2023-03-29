import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import home from '../data/home';
import BannerDetail from './BannerDetail';

const CardContent = () => {
  const navigation = useNavigation();

  return home.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailContent', {
            img: data.img,
            title: data.title,
            firstContent: data.firstContent,
            description: data.description,
            id: data.id,
            myComponent: <BannerDetail />,
          })
        }
        key={index}
        style={{
          marginHorizontal: '3%',
          height: 100,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EAF0FF',
          borderRadius: 10,
          marginTop: '5%',
        }}
      >
        <View
          style={{
            width: '70%',
            marginRight: '3%',
            marginBottom: '1%',
            marginLeft: '1%',
          }}
        >
          <Text>{data.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <Text style={{ fontSize: 9, color: '#5193E1', marginRight: '5%' }}>
              {data.author}
            </Text>
            <FontAwesome
              name="circle"
              size={5}
              color="#C4C4C4"
              style={{ marginRight: '5%' }}
            />
            <Text style={{ fontSize: 9, color: '#C4C4C4' }}>{data.time}</Text>
          </View>
        </View>
        <Image
          source={data.img}
          style={{ width: '22%', height: 77, borderRadius: 9 }}
        />
      </TouchableOpacity>
    );
  });
};

export default CardContent;
