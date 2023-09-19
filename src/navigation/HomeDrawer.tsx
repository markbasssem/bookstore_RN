import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileDrawer from '../components/ProfileDrawer';
import HomeStack from './HomeStack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function NotificationsScreen({ navigation }: NativeStackScreenProps<any, any>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 75,
        drawerLabelStyle: styles.labels,
        drawerActiveTintColor: '#dddfff',
        drawerActiveBackgroundColor: '#000',
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Antdesign name="profile" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={NotificationsScreen}
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
