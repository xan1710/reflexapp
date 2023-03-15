import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import RelaxList from '../screenComponent/RelaxList';

const Relaxtion = () => {
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
          Giãn cơ
        </Text>
      </View>
      <View>
        <RelaxList />
      </View>
    </ScrollView>
  );
};

export default Relaxtion;
