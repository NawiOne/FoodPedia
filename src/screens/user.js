import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OrderHistory from './orderHistory';
import style from '../style/user';
import user from '../image/user.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/AntDesign';

const UserProfile = ({navigation}) => {
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <View style={style.photo}>
          <Image source={user} style={style.userImg} />
        </View>
        <Text style={style.name}>Samidi</Text>
        <Text style={style.id}>@124</Text>
      </View>
      <TouchableOpacity
        style={style.list}
        onPress={() => navigation.navigate('orderhistory')}>
        <Icon name="table" size={25} />
        <Text style={style.listText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.list}>
        <Logout name="logout" size={25} />
        <Text style={style.listText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const User = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="orderhistory"
        component={OrderHistory}
        options={{
          headerTitle: 'Order History',
        }}
      />
    </Stack.Navigator>
  );
};

export default User;
