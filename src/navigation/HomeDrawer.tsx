import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileDrawer from '../components/ProfileDrawer';
import HomeStack from './HomeStack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../screens/ProfileScreen';



const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <ProfileDrawer {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 25,
        drawerLabelStyle: styles.labels,
        drawerActiveTintColor: '#dddfff',
        drawerActiveBackgroundColor: '#000',
        drawerType: "slide"
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Antdesign name="profile" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  labels: { marginLeft: -20, fontSize: 14, fontFamily: 'Roboto-medium' },
});
