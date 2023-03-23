import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import BannerStep from '../screenComponent/BannerStep';
import { Video } from 'expo-av';
import { colors } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const StepExercise = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const route = useRoute();
  const steps = route.params.step;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPress = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentIndex(nextIndex);
    }
  };
  const handleBackPress = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
    }
  };
  return (
    <View>
      <View>
        <View style={{ flex: 1 }}>
          <Image
            source={steps[currentIndex].img}
            style={{ width: '100%', height: 150 }}
          />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              alignContent: 'center',
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.27)',
              height: 150,
            }}
          >
            <View style={{ marginVertical: '10%', marginHorizontal: '5%' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: '400',
                    marginLeft: '2%',
                  }}
                >
                  Khởi động
                </Text>
              </View>
              <View
                style={{
                  marginTop: '4%',
                  marginLeft: '5%',
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 18, fontWeight: '700' }}
                >
                  {steps[currentIndex].title}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '89%',
          alignSelf: 'center',
          flex: 1,
          marginTop: '40%',
        }}
      >
        <Video
          ref={video}
          style={{
            alignSelf: 'center',
            width: 320,
            height: 205,
          }}
          useNativeControls
          resizeMode="contain"
          source={steps[currentIndex].video}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <View
        style={{
          width: '89%',
          marginTop: '55%',
          alignSelf: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 26 }}>
          {steps[currentIndex].title}
        </Text>
        <Text style={{ fontSize: 12, marginTop: '5%' }}>
          {steps[currentIndex].content}
        </Text>
      </View>

      {currentIndex + 1 >= steps.length ? (
        <View style={{ marginLeft: '70%' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 20, color: '#4B6AB9' }}>Hoàn Thành</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <TouchableOpacity onPress={handleBackPress}>
            <Text style={{ fontSize: 20, color: '#4B6AB9' }}>Trước đó</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress}>
            <Text style={{ fontSize: 20, color: '#4B6AB9' }}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default StepExercise;

const styles = StyleSheet.create({});
