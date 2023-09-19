/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BookDetails from '../screens/BookDetails';

const Stack = createNativeStackNavigator();

function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
