import { View, Text, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const CardHome = () => {
  const card = [
    {
      id: 1,
      title:
        '4 động tác khởi động để bắt đầu luyện tập cho bất cứ môn thể thao nào',
      img: require('../storages/img/card1.png'),
    },
    {
      id: 2,
      title: '5 bài tập khởi động toàn cơ thể buổi sáng',
      img: require('../storages/img/card2.png'),
    },
    {
      id: 3,
      title: '6 bài khởi động trước khi chạy bộ hỗ trợ giảm chấn thương',
      img: require('../storages/img/card3.png'),
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'flex-end',
          marginTop: '5%',
        }}
        key={data.id}
      >
        <View>
          <Image
            source={data.img}
            style={{ width: 375, height: 130, borderRadius: 15 }}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.27)',
            borderRadius: 15,
            left: 2,
            width: 372,
            height: 52,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
              color: 'white',
              width: '85%',
              marginHorizontal: '8%',
            }}
          >
            {data.title}
          </Text>
        </View>
        <View style={{ position: 'absolute', top: 5, right: 6 }}>
          <Feather name="bookmark" size={24} color="rgba(109, 133, 245, 1)" />
        </View>
      </View>
    );
  });
};

export default CardHome;
