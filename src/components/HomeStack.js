import React from 'react';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FoodDetail from '../screens/foodDetail';
import Search from '../screens/search';
import HomeMenu from '../screens/home';
import Register from '../screens/Register';
import Login from '../screens/login';
import Auth from '../components/auth';

import Cart from '../screens/cart';
import User from '../screens/user';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {menu} = useSelector((state) => state);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#E74C3C',
        labelPosition: 'below-icon',
        inactiveTintColor: '#616A6B',
      }}>
      <Tab.Screen
        component={HomeMenu}
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
  );
};

const HomeStack = () => {
  const {menu} = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomtab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{
            headerTitle: menu.nameCategory.name_category,
          }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
