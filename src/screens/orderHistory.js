import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {getOrderUserCreator, deleteOrderCreator} from '../redux/actions/menu';
import style from '../style/orderHistory';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../image/header.jpg';

const Order = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderUserCreator());
  }, [dispatch]);
  const {menu} = useSelector((state) => state);
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Image source={img} style={style.imgHeader} />
      </View>
      {menu.isPending ? (
        <ActivityIndicator size="large" color="black" />
      ) : menu.userOrder.length ? (
        menu.userOrder.map((item, index) => {
          return (
            <View style={style.listCont} key={index}>
              <View style={style.date}>
                <Text style={style.dateText}>{item.date}</Text>
              </View>
              <View style={style.item}>
                <View style={style.left}>
                  <Text style={style.bold}>Items: </Text>
                </View>
                <View style={style.right}>
                  <Text style={style.bold}>{item.orders}</Text>
                </View>
              </View>
              <View style={style.total}>
                <View style={style.left}>
                  <Text style={style.bold}>Total:</Text>
                </View>
                <View style={style.right}>
                  <Text style={style.bold}>{item.amount}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={style.delete}
                onPress={() => {
                  dispatch(deleteOrderCreator(item.id));
                  dispatch(getOrderUserCreator());
                }}>
                <Icon name="trash" color="#F95A50" size={27} />
              </TouchableOpacity>
            </View>
          );
        })
      ) : null}
    </ScrollView>
  );
};

export default Order;
