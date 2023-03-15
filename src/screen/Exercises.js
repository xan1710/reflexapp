import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ExercisesList from '../screenComponent/ExercisesList';

const Exercises = () => {
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
          Khởi động
        </Text>
      </View>
      <View>
        <ExercisesList />
      </View>
    </ScrollView>
  );
};

export default Exercises;
