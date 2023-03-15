import { View, Text, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const ExercisesList = () => {
  const cards = [
    {
      id: 1,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard1.png'),
    },
    {
      id: 2,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard2.png'),
    },
    {
      id: 3,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard1.png'),
    },
    {
      id: 4,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard3.png'),
    },
    {
      id: 5,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard4.png'),
    },
    {
      id: 6,
      title: 'Tại sao cần khởi động, khởi động trước khi tập đúng cách.',
      author: 'Nature Channel',
      time: '1h trước',
      img: require('../storages/img/piccard5.png'),
    },
  ];

  return cards.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          marginHorizontal: '3%',
          height: '15%',
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
            <Text style={{ fontSize: 9, color: '#B0A7F8', marginRight: '5%' }}>
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
        <Image source={data.img} style={{ width: '22%', height: '90%' }} />
      </View>
    );
  });
};

export default ExercisesList;
