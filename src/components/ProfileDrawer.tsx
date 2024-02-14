import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Share from "react-native-share"
import { IMAGE_URL } from '../screens/constants';
import { setAccountAtLocalStorage } from '../storage/cache';
import { logOut } from '../store/reducers/accountReducer';
// import { Share } from "react-native"


export default function ProfileDrawer(props) {
  const account = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch()
  // console.log(account.photo)
  return (
    <View style={styles.drawer}>
      <ImageBackground
        source={require('../../assets/profile_background.webp')}
        style={styles.background}>
        <Image
          // source={{ uri: `data:${account.photo}` }}
          source={{ uri: `data:image/png;base64,${account.photo}` }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{account.username}</Text>
        <Text style={styles.coins}>
          {account.money} coins{'   '}
          <FontAwesome5 name="coins" size={14} color={'white'}></FontAwesome5>
        </Text>
      </ImageBackground>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: '#bbb' }}>
        <TouchableOpacity
          onPress={() => {
            Share.open({ title: "Ttile", message: "Check this cool profile", url: IMAGE_URL }).catch((err) => { })
          }}
          style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IonIcon name="share-social-outline" size={22} color={"black"} />
            <Text
              style={styles.textStyle}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => {
          await setAccountAtLocalStorage('');
          dispatch(logOut);
          props.navigation.replace('Login');
        }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IonIcon name="exit-outline" size={22} color={"black"} />
            <Text
              style={styles.textStyle}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
    borderRadius: 70
  },
  username: {
    color: 'white',
    fontSize: 20,
  },
  coins: {
    color: 'white',
  },
  bottomView: {
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
    color: "black"
  },
});
