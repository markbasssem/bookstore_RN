/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
import Init from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StripeProvider } from '@stripe/stripe-react-native';


function App(): JSX.Element {

  return (
    <StripeProvider
      publishableKey="pk_test_51OqYXHDCeh2h0nehqVF7ZaXDQnRq4wOLMpzQampJdjrrNX4v6iA6aOclZ7foDj6GbckE1WY7njCZy9FJNQdMWcYT006Yao93uW"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Init />
        </GestureHandlerRootView>
      </Provider>
    </StripeProvider>

  );
}

export default App;
