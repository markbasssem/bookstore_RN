import { Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Book } from '../types/Book';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IMAGE_URL } from '../screens/constants';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  book: Book;
  navigation: NativeStackScreenProps<any, any>;
};

export default function BookCard(props: Props) {
  const goToBookPage = (book: Book) => {
    props.navigation.navigation.navigate('BookDetails', { book: book });
  };
  return (
    <TouchableHighlight
      underlayColor={'white'}
      onPress={() => goToBookPage(props.book)}>
      <View style={[styles.card, styles.elevation]}>
        <Image
          resizeMethod="scale"
          style={{
            height: "65%",
            resizeMode: 'stretch',
            bottom: "17%",
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
            marginVertical: "20%"

          }}>
          <Text style={styles.secondaryText}>{props.book.author.name}</Text>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <View style={{ flexDirection: "row" }}>
              <Entypo name='star' color={"#FDCC0D"} size={14} />
              <Text style={styles.rating}>{" " + props.book.rating + " "}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              console.log("RRRR")
            }}>
              <AntDesign name='pluscircle' size={30} color={"#D4A056"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F0E5',
    borderRadius: 22,
    padding: 15,
    height: "100%",
    width: 170,
    marginVertical: 35,
    marginRight: 15,
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: "-20%",
  },
  secondaryText: {
    color: 'black',
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
  rating: {
    fontSize: 12
  }
});
