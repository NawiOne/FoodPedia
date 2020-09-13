import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import style from '../style/orderHistory';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../image/header.jpg'

const Order = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Image source={img} style={style.imgHeader}/>
      </View>
      <View style={style.listCont}>
        <View style={style.date}>
          <Text style={style.dateText}>1 January 2020</Text>
        </View>
        <View style={style.item}>
          <View style={style.left}>
            <Text style={style.bold}>Items: </Text>
          </View>
          <View style={style.right}>
            <Text style={style.bold}>Burger King, sasjff</Text>
          </View>
        </View>
        <View style={style.total}>
          <View style={style.left}>
            <Text style={style.bold}>Total:</Text>
          </View>
          <View style={style.right}>
            <Text style={style.bold}>Rp. 12000</Text>
          </View>
        </View>
        <TouchableOpacity style={style.delete}>
          <Icon name="trash" color="#F95A50" size={27} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Order;
