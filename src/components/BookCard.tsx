import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {book} from '../types/Book';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { IMAGE_URL } from '../screens/constants';

type Props = {
  book: book;
  navigation: NativeStackScreenProps<any, any>;
};

export default function BookCard(props: Props) {
  const goToBookPage = (book: book) => {
    props.navigation.navigation.navigate('BookDetails', {book: book});
  };
  return (
    <TouchableHighlight
      underlayColor={'white'}
      onPress={() => goToBookPage(props.book)}>
      <View style={[styles.card, styles.elevation]}>
        <Image
          resizeMethod="scale"
          style={{
            height: 125,
            resizeMode: 'contain',
          }}
          source={{
            uri: props.book.image || IMAGE_URL,
          }}
        />
        <Text numberOfLines={2} style={styles.titleStyle}>
          {props.book.title}
        </Text>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Text style={styles.secondaryText}>{props.book.author.name}</Text>
          <Text style={styles.secondaryText}>{props.book.rating}*</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    height: 270,
    width: 170,
    marginVertical: 10,
    marginRight: 15,
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 13,
  },
  secondaryText: {
    color: 'black',
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
});
