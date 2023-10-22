import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Four_B = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [data, setData] = useState([
    {
      id: 1,
      image: require('./assets/usb1.png'),
    },
    {
      id: 2,
      image: require('./assets/usb2.png'),
    },
    {
      id: 3,
      image: require('./assets/usb3.png'),
    },
    {
      id: 4,
      image: require('./assets/usb4.png'),
    },
    {
      id: 5,
      image: require('./assets/usb5.png'),
    },
    {
      id: 6,
      image: require('./assets/usb6.png'),
    },
  ]);

  const [star, setStar] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image style={styles.backButton} source={require('./assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat</Text>
        <Image style={styles.cartButton} source={require('./assets/cart.png')} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.itemContainer}>
          {data.map((item, index) => (
            <View style={styles.item} key={item.id}>
              <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
              <Text style={styles.itemText}>Cáp chuyển từ Cổng USB sang PS2...</Text>
              <View style={styles.starContainer}>
                {star.map((item, index) => (
                  <Image
                    key={item.id}
                    source={require('./assets/star.png')}
                    style={[
                      styles.starImage,
                      { tintColor: item.id == 5 ? '#d6d6d6' : null },
                    ]}
                  />
                ))}
                <Text style={styles.starText}>(15)</Text>
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.CostText}>69.900 đ</Text>
                <Text style={styles.discountText}>-39%</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      
    </View>
  );
};
export default Four_B

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: '7.3%',
    width: '100%',
    backgroundColor: '#1ba9ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  cartButton: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },
  scrollView: {
    marginBottom: '8%',
  },
  itemContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    height: '55%',
  },
  itemImage: {
    height: '13%',
  },
  itemText: {
    marginTop: 8,
    marginHorizontal: 30,
    color: 'black',
    fontWeight: '400',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  starImage: {
    marginTop: 5,
    height: 20,
    width: 20,
    marginStart: 1,
    marginEnd: 3,
  },
  TextContainer:{
    justifyContent:'center',
    alignItems: 'center',
  },
});