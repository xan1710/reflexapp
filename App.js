import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import RootStack from './src/router/Stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    id: 1,
    title: 'Khởi động đúng cách ',
    text: 'luyện tập an toàn',
    img: require('./src/img/pic_1.png'),
  },
  {
    id: 2,
    title: 'Giãn cơ sau tập ',
    text: 'thúc đẩy hiệu quả',
    img: require('./src/img/pic_2.png'),
  },
  {
    id: 3,
    title: 'Cùng Balance luyện tập ',
    text: 'KHOA HỌC NHẤT',
    img: require('./src/img/pic_3.png'),
  },
];

function App() {
  const [showHomePage, setshowHomePage] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);

  const RenderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.img}
          style={{
            resizeMode: 'cover',
            height: '60%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 5,
            fontSize: 24,
            color: '#7B61FF',
            alignSelf: 'center',
            fontWeight: '400',
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#7B61FF',
            fontSize: 24,
            paddingHorizontal: 30,
            fontWeight: '600',
          }}
        >
          {item.text}
        </Text>
        <View>
          {currentPage == 2 ? (
            <Pressable
              style={{
                height: '25%',
                width: '45%',
                backgroundColor: '#7B61FF',
                borderRadius: 48,
                marginTop: 21,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
              }}
              onPress={onDone}
            >
              <Text
                style={{
                  color: '#ffff',
                  fontSize: 17,
                  lineHeight: 20,
                  textAlign: 'center',
                  marginRight: 17,
                }}
              >
                Bắt đầu
              </Text>
              <AntDesign name="caretright" size={17} color="white" />
            </Pressable>
          ) : (
            <View style={styles.skip}>
              <Text style={{ color: '#ADA4A5' }} onPress={onSkip}>
                Bỏ qua
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  const onDone = () => {
    setshowHomePage(true);
  };

  const onSkip = () => {
    setshowHomePage(true);
  };
  return (
    <>
      <StatusBar backgroundColor="black" />

      {showHomePage ? (
        <SafeAreaView style={{ flex: 1 }}>
          <RootStack />
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          showSkipButton={true}
          onSlideChange={(index) => setcurrentPage(index)}
          activeDotStyle={{
            backgroundColor: '#7B61FF',
            width: 30,
          }}
        />
      )}
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 41,
    height: 41,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
