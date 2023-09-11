import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type navProp = {
  navigation: NativeStackNavigationProp<any>;
};

export default function BackBar(props: navProp): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.pop();
      }}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Icon
          style={{backgroundColor: 'white'}}
          name="arrow-back-outline"
          color="#00000f"
          size={40}
        />
        <Text style={{color: 'black', fontSize: 16}}>Back</Text>
      </View>
    </TouchableOpacity>
  );
}
