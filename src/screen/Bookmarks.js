import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import BookmarksList from '../screenComponent/BookmarksList';

const Bookmarks = () => {
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
          Đã lưu
        </Text>
      </View>
      <View>
        <BookmarksList />
      </View>
    </ScrollView>
  );
};

export default Bookmarks;
