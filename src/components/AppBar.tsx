import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

type navProp = {
  navigation: NativeStackNavigationProp<any>;
};

export default function AppBar(props: navProp): JSX.Element {
  const username = useSelector((state: RootState) => state.account.username);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <Icon
          name="profile"
          size={30}
          color="#718075"
          onPress={() => {
            props.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Text style={styles.welcome}>Welcome {username}!!</Text>
      </View>
      <TouchableHighlight
        style={styles.signOutNormal}
        underlayColor={'#D9E1C6'}
        onPress={() => {}}>
        <View style={{ flexDirection: 'row' }}>
          <IonIcon name="exit-outline" size={18} color={'white'} />
          <Text>{'   '}Sign Out</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    // borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10,
  },
  signOutNormal: {
    backgroundColor: '#D4A056',
    padding: 6,
    borderRadius: 6,
  },
  leftPart: {
    flexDirection: 'row',
  },
});
