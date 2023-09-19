import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookDetailsParamList } from '../types/navigation';
import { IMAGE_URL } from './constants';
import BackBar from '../components/BackBar';
import Stat from '../components/Stat';
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
    borderBottomColor: '#DBDBDB',
    flexDirection: 'row',
    padding: 10,
  },
  bookDescription: {
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    marginVertical: 10,
    padding: 10,
  },
  bookStats: {
    // backgroundColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    flexDirection: 'row',
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  authorStyle: {
    color: '#aaaaaa',
    fontSize: 17,
    fontWeight: '500',
  },
});
