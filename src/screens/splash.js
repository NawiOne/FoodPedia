import React from 'react';
import {View, Text} from 'react-native';
import style from '../style/splash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('auth');
  }, 4000);
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.logo}>
          <Icon name="food-fork-drink" color="white" size={50} />
        </View>
        <Text style={style.name}>FoodPedia</Text>
      </View>
    </View>
  );
};

export default Splash;
