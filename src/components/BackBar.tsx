import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type navProp = {
  navigation: NativeStackNavigationProp<any>;
};

export default function BackBar(props: navProp): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.goBack();
      }}>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Icon
          style={{ backgroundColor: "transparent" }}
          name="arrow-back-outline"
          color="#00000f"
          size={40}
        />
        <Text style={{ color: 'black', fontSize: 16 }}>  Back</Text>
      </View>
    </TouchableOpacity>
  );
}
