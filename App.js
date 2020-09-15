import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store';
import HomeStack from './src/components/HomeStack';

const App = () => {
  const storeRedux = reduxStore.getState();
  console.log(storeRedux);
  return (
    <Provider store={reduxStore}>
      <HomeStack />
    </Provider>
  );
};

export default App;
