import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileDrawer from '../components/ProfileDrawer';
import HomeStack from './HomeStack';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <ProfileDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false, swipeEdgeWidth: 275}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
