import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// import reduxStore from './src/redux/store';
import HomeStack from './src/components/HomeStack';
const {persistor, store} = configureStore();

const App = () => {
  // const storeRedux = reduxStore.getState();
  // console.log(storeRedux);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
