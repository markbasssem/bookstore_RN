import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';

export default function ProfileDrawer(props) {
  const account = useSelector((state: RootState) => state.account);
  return (
    <View style={styles.drawer}>
      <ImageBackground
        source={require('../../assets/profile_background.webp')}
        style={styles.background}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.username}>{account.username}</Text>
      </ImageBackground>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  username: {
    color: 'white',
    fontSize: 20,
  },
});
