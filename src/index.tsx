/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import {useDispatch} from 'react-redux';
import {getAccount, isLoggedIn} from './storage/cache';
import SplashScreen from './screens/SplashScreen';
import {setAccount} from './store/reducers/accountReducer';
import HomeDrawer from './navigation/HomeDrawer';

const Stack = createNativeStackNavigator();

function Init(): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState('loading');
  const dispatch = useDispatch();
  async function getinitRoute() {
    await isLoggedIn().then(async res => {
      if (res) {
        const user = await getAccount();
        console.log('getInitRoute', user);
        dispatch(setAccount(user));
        setIsSignedIn('true');
      } else {
        setIsSignedIn('false');
      }
    });
  }

  useEffect(() => {
    getinitRoute();
  });

  if (isSignedIn === 'loading') {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={isSignedIn === 'false' ? 'Login' : 'HomeDrawer'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Init;