import {StyleSheet, Text, View} from 'react-native';

type props = {
  first: string;
  second: string | number;
  third: string;
};

export default function Stat(props: props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.secondaryText}>{props.first}</Text>
      <Text style={styles.mainText}>{props.second}</Text>
      <Text style={styles.secondaryText}>{props.third}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    padding: 10,
    borderRightWidth: 1,
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginHorizontal: 10,
    borderColor: "#D4A056"
  },
  mainText: {
    color: '#D4A056',
    fontSize: 20,
    fontWeight: '800',
  },
  secondaryText: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '500',
  },
});
