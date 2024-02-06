import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookDetailsParamList } from '../types/navigation';
import { IMAGE_URL } from './constants';
import BackBar from '../components/BackBar';
import Stat from '../components/Stat';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<BookDetailsParamList, 'BookDetails'>;

export default function BookDetails({ route, navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <BackBar navigation={navigation} />
      {/* Book header */}
      <View style={styles.bookHeader}>
        <View>
          <Image
            resizeMethod="scale"
            style={{
              height: 125,
              width: 150,
              resizeMode: 'contain',
            }}
            source={{
              uri: route.params.book.image || IMAGE_URL,
            }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.titleStyle}>{route.params.book.title}</Text>
          <Text style={styles.authorStyle}>
            {route.params.book.author.name}
          </Text>
        </View>
      </View>
      {/* desc */}
      <View style={styles.bookDescription}>
        <Text style={[styles.titleStyle, { marginVertical: 15 }]}>
          Description
        </Text>
        <Text style={{ color: '#ababab', fontWeight: '400' }}>
          {route.params.book.description}
        </Text>
      </View>
      {/* stats */}
      <View style={styles.bookStats}>
        <Stat
          first="selling"
          second={route.params.book.selling}
          third="copies"
        />
        <Stat first="rating" second={route.params.book.rating} third="stars" />
        <Stat first="Length" second={route.params.book.pages} third="pages" />

      </View>
      <View style={styles.bottom}>
        <Feather name='shopping-cart' size={30} color={"black"} style={styles.buyIcon} />
        <TouchableOpacity style={styles.buy} onPress={() => { console.log("RR") }}>
          <Text style={styles.buyText}>Buy now</Text>
          <MaterialIcons name='arrow-forward-ios' size={28} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
  },
  bookHeader: {
    // backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: '#D4A056',
    flexDirection: 'row',
    padding: 10,
  },
  bookDescription: {
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#D4A056',
    marginVertical: 10,
    padding: 10,
  },
  bookStats: {
    // backgroundColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: '#D4A056',
    flexDirection: 'row',
  },
  titleStyle: {
    color: '#D4A056',
    fontSize: 18,
    fontWeight: '600',
  },
  authorStyle: {
    color: '#aaaaaa',
    fontSize: 17,
    fontWeight: '500',
  },
  bottom: {
    // backgroundColor: "#ddd",
    height: "12%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    right: 0,
    left: 0,
    // margin: 10
    // alignSelf: "flex-end"
  },
  buy: {
    backgroundColor: "#D4A056",
    flexDirection: "row",
    padding: "5%",
    paddingHorizontal: "14%",
    alignItems: "center",
    justifyContent: "space-around",
    // left: "-20%",
    borderRadius: 20,
  },
  buyText: {
    fontSize: 24,
    color: "white",
    marginRight: "8%"
  },
  buyIcon: {
    borderWidth: 1.8,
    padding: "3%",
    borderRadius: 17,
    marginRight: "-4%",
    borderColor: "#bbb"
  }
});
