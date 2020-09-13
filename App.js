import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';
import reduxStore from './src/redux/store';
import BottomTab from './src/components/BottomTab'

import Cart from './src/screens/cart';
import Home from './src/screens/home';
import Icon from 'react-native-vector-icons/FontAwesome';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const storeRedux = reduxStore.getState();
  console.log(storeRedux);
  return (
    <Provider store={reduxStore}>
      <BottomTab />
    </Provider>
  );
};

export default App;
