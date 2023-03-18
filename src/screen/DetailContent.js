import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import BannerDetail from '../screenComponent/BannerDetail';

const DetailContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <BannerDetail />
          <View style={{ width: '89%', alignSelf: 'center', flex: 1 }}>
            <Text
              style={{
                textAlign: 'justify',
                fontStyle: 'italic',
                lineHeight: 18,
              }}
            >
              Lưu ý về việc khởi động để tránh chấn thương trước khi tập luyện.
              Khởi động trước khi tập luyện hay tham gia một bộ môn thể thao nào
              luôn luôn cần thiết và quan trọng. Hầu hết tất cả các huấn luyện
              viên đều khuyên người tập thực hiện trước khi tham gia bất kỳ môn
              thể thao nào. Vậy bạn đã hiểu rõ tầm quan trọng của các bài khởi
              động, cũng như cách thực hiện đúng?
            </Text>
          </View>
          <Image
            source={require('../storages/img/detail/image1.png')}
            style={{ width: '90%', alignSelf: 'center', flex: 1 }}
          />
          <View style={{ width: '90%', alignSelf: 'center', marginTop: '8%' }}>
            <Text style={{ marginBottom: '3%', fontWeight: '700' }}>
              Tại sao cần khởi động?
            </Text>
            <View>
              <Text>
                Khởi động trước khi tập bất cứ môn thể thao nào là điều cần
                thiết và cực kỳ quan trọng. Bởi khởi động giúp cả thể chất và
                tinh thần người tập được chuẩn bị sẵn sàng. Từ đó giảm nguy cơ
                chấn thương, đau nhức trong và sau khi luyện tập. Khi khởi động,
                lượng oxy đến các cơ bắp được bổ sung thêm một cách từ từ. Khi
                máu đến các cơ, gân và dây chằng nhiều hơn, chúng sẽ trở nên đàn
                hồi hơn. Điều này sẽ làm cho quá trình co duỗi dễ dàng và hiệu
                quả hơn. Các động tác khởi động cũng giúp nhịp tim tăng dần lên,
                không quá đột ngột gây nguy hại đến hệ tim mạch và máu cũng sẽ
                được lưu thông tốt hơn. Việc khởi động còn làm ấm nhiệt độ cơ
                thể giúp các cơ và mô liên kết trở nên linh hoạt hơn khi luyện
                tập.
              </Text>
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: '8%' }}>
            <Text style={{ marginBottom: '3%', fontWeight: '700' }}>
              Các bài tập khởi động trước khi tập
            </Text>
            <View>
              <Text>
                Khởi động trước khi tập bất cứ môn thể thao nào là điều cần
                thiết và cực kỳ quan trọng. Bởi khởi động giúp cả thể chất và
                tinh thần người tập được chuẩn bị sẵn sàng. Từ đó giảm nguy cơ
                chấn thương, đau nhức trong và sau khi luyện tập. Khi khởi động,
                lượng oxy đến các cơ bắp được bổ sung thêm một cách từ từ. Khi
                máu đến các cơ, gân và dây chằng nhiều hơn, chúng sẽ trở nên đàn
                hồi hơn. Điều này sẽ làm cho quá trình co duỗi dễ dàng và hiệu
                quả hơn. Các động tác khởi động cũng giúp nhịp tim tăng dần lên,
                không quá đột ngột gây nguy hại đến hệ tim mạch và máu cũng sẽ
                được lưu thông tốt hơn. Việc khởi động còn làm ấm nhiệt độ cơ
                thể giúp các cơ và mô liên kết trở nên linh hoạt hơn khi luyện
                tập.
              </Text>
            </View>
          </View>
          <View>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailContent;
