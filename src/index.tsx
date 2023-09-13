/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Home from './screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetails from './screens/BookDetails';
import Login from './screens/Login';
import {Provider, useDispatch} from 'react-redux';
import {store} from './store/configureStore';
import {getAccount, isLoggedIn} from './storage/cache';
import SplashScreen from './screens/SplashScreen';
import {setAccount} from './store/reducers/accountReducer';

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
        initialRouteName={isSignedIn === 'false' ? 'Login' : 'Home'}>
        {/* {isSignedIn === 'false' ? (
          // No token found, user isn't signed in
          <Stack.Screen name="SignIn" component={Login} />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={Home} />
        )} */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Init;
