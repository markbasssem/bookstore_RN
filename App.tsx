/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
import Init from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Init />
      </GestureHandlerRootView>

    </Provider>
  );
}

export default App;
