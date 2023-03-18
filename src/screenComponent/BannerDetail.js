import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const BannerDetail = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../storages/img/bannerdetail.png')}
        style={{ width: '100%', position: 'absolute' }}
      />
      <View
        style={{
          width: '90%',
          marginVertical: '10%',
          alignSelf: 'center',
          alignContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ionicons name="chevron-back" size={30} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '400',
              marginLeft: '2%',
            }}
          >
            Bài viết
          </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            marginTop: '4%',
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
            Tại sao cần khởi động, khởi động trước khi tập đúng cách.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BannerDetail;
