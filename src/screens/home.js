import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryCreator, getMenuCreator} from '../redux/actions/menu';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import styleLogo from '../style/login';
import logo from '../image/spoon.png';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import style from '../style/home';

import Carousel from '../components/carousel';
import ListFood from '../components/listFood';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const HomeMenu = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryCreator());
    dispatch(getMenuCreator());
  }, [dispatch]);

  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={styleHome.logoName}>
            <View style={style.logo}>
              <Fork name="food-fork-drink" size={15} color="white" />
            </View>
            <Text style={styleHome.brandName}>FoodPedia</Text>
          </View>
          <View style={styleHome.rightIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('search')}>
              <Icon name="search" size={25} style={styleHome.search} />
            </TouchableOpacity>
            <Icon name="notifications" size={25} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel />
          <ListFood navigation={navigation} />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeMenu;

const styleHome = StyleSheet.create({
  logoName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: 5,
  },
  rightIcon: {
    padding: 4,
    flexDirection: 'row',
  },
  search: {
    marginRight: 5,
  },
});
