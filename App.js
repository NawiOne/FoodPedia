import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store';

import Cart from './src/screens/cart';
import Register from './src/screens/Register';
import Home from './src/screens/home';
import Profile from './src/screens/profile';
import Icon from 'react-native-vector-icons/FontAwesome';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={reduxStore}>
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
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarLabel: 'You',
              tabBarIcon: ({color, size}) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
