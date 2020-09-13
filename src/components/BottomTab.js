import React from 'react';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Cart from '../screens/cart';
import Home from '../screens/home';
import User from '../screens/user';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {menu} = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#E74C3C',
          labelPosition: 'below-icon',
          inactiveTintColor: '#616A6B',
        }}>
        <Tab.Screen
          component={Home}
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
            tabBarBadge: menu.cart.length,
          }}
        />
        <Tab.Screen
          name="user"
          component={User}
          options={{
            tabBarLabel: 'You',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomTab;
