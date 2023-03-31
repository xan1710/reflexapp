import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import home from '../data/home';
import { useNavigation } from '@react-navigation/native';
import BannerDetail from './BannerDetail';

const ContentHome = () => {
  const navigation = useNavigation();
  return home.slice(0, 2).map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
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
        >
          <Image
            source={data.img}
            style={{
              width: 159,
              height: 159,
              borderRadius: 16,
            }}
          />
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.27)',
              width: 159,
              height: 159,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: 'white',
                textAlign: 'center',
                width: '80%',
              }}
            >
              {data.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

export default ContentHome;
