import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CardContent from '../screenComponent/CardContent';

const Content = () => {
  return (
    <ScrollView>
      <View style={{ marginTop: '8%', marginLeft: '5%' }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 20,
            color: '#565B73',
            textTransform: 'uppercase',
          }}
        >
          Bài Viết
        </Text>
      </View>
      <View>
        <CardContent />
      </View>
    </ScrollView>
  );
};

export default Content;
