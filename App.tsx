/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetails from './src/screens/BookDetails';
import Login from './src/screens/Login';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store/configureStore';
import {getAccount, isLoggedIn} from './src/storage/cache';
import SplashScreen from './src/screens/SplashScreen';
import { setAccount } from './src/store/reducers/accountReducer';
import Init from './src';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
 
  return (
    <Provider store={store}>
      <Init/>
    </Provider>
  );
}

export default App;
