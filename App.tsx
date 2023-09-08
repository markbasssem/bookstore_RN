/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetails from './src/screens/BookDetails';
import Login from './src/screens/Login';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookDetails" component={BookDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
