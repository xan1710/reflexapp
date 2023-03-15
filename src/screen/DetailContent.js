import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const DetailContent = () => {
  return (
    <View>
      <View>
        <Image />
        <View>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text>Bài viết</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailContent;
