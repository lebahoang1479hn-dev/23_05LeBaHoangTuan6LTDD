import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'

const Four_A = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Điện thoại samsung',
      shop: 'Thế giới di động',
      image: require('./assets/samsung.png'),
    },
    {
      id: 2,
      name: 'Điện thoại xiaomi',
      shop: 'Thế giới di động',
      image: require('./assets/xiaomi.png'),
    },
    {
      id: 3,
      name: 'Điện thoai Oppo',
      shop: 'Thế giới di động',
      image: require('./assets/oppo.png'),
    },
    {
      id: 4,
      name: 'Điện thoại Iphone',
      shop: 'Thế giới di động',
      image: require('./assets/iphone.png'),
    },
    {
      id: 5,
      name: 'Điện thoại cục gạch',
      shop: 'Thế giới di động',
      image: require('./assets/cucgach.png'),
    },
    {
      id: 6,
      name: 'Điện thoại Huawei',
      shop: 'Thế gioi di động',
      image: require('./assets/huawei.png'),
    },
  ])

  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          height: screenHeight * 0.073,
          width: screenWidth,
          backgroundColor: '#1ba9ff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/back.png')}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#fff',
          }}
        >
          Chat
        </Text>
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/cart.png')}
        />
      </View>

      <Text
        style={{
          marginStart: 23,
          marginEnd: 20,
          marginVertical: 10,
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>

      <ScrollView
        style={{
          marginBottom: screenHeight * 0.08,
        }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigate('Four_B')
            }}
          >
            <View
              style={{
                height: 0.2,
                width: screenWidth,
                backgroundColor: 'rgba(45,45,45,0.2)',
              }}
            ></View>
            <View
              style={{
                marginVertical: 3,
                height: screenHeight * 0.11,
                width: screenWidth,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: item.id == 1 ? '#fff' : '',
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: screenHeight * 0.11,
                  width: screenHeight * 0.11,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  height: screenHeight * 0.11,
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    marginTop: 3,
                    fontSize: 15,
                    color: 'black',
                    fontWeight: '500',
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 15,
                    color: item.id == 1 ? 'red' : '#7d5b5b',
                  }}
                >
                  Shop{' '}
                  <Text
                    style={{
                      color: item.id < 3 ? 'red' : 'black',
                    }}
                  >
                    {item.shop}
                  </Text>
                </Text>
              </View>
              {item.id != 7 ? (
                <View
                  style={{
                    height: screenHeight * 0.051,
                    width: screenWidth * 0.22,
                    backgroundColor: 'red',
                    marginRight: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'white',
                    }}
                  >
                    Chat
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    marginHorizontal: 20,
                  }}
                ></View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: screenHeight * 0.08,
          width: screenWidth,
          backgroundColor: '#1ba9ff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/menu.png')}
        />
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/home.png')}
        />
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/back_bottom.png')}
        />
      </View>
    </View>
  )
}

export default Four_A

const styles = StyleSheet.create({})
