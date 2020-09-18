import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {logoutCreator} from '../redux/actions/auth';
import {Overlay} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import OrderHistory from './orderHistory';
import style from '../style/user';
import user from '../image/user.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/AntDesign';

const UserProfile = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <View style={style.photo}>
          <Image source={user} style={style.userImg} />
        </View>
        {auth.data === null ? null : (
          <Text style={style.name}>{auth.data.username}</Text>
        )}
      </View>
      <TouchableOpacity
        style={style.list}
        onPress={() => navigation.navigate('orderhistory')}>
        <Icon name="table" size={25} />
        <Text style={style.listText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          toggleOverlay();
        }}>
        <Logout name="logout" size={25} />
        <Text style={style.listText}>Logout</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text>Logout ?</Text>
          <View style={style.btn}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('auth');
                dispatch(logoutCreator());
                toggleOverlay();
              }}
              style={style.yes}>
              <Text style={style.str}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.no} onPress={() => toggleOverlay()}>
              <Text style={style.strno}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
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
