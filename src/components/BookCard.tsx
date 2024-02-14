import { Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Book } from '../types/Book';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IMAGE_URL, server } from '../screens/constants';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { useState } from 'react';

type Props = {
  book: Book;
  navigation: NativeStackScreenProps<any, any>;
};

export default function BookCard(props: Props) {

  const account = useSelector((state: RootState) => state.account);

  const initialValue = account.cart.includes(props.book._id) ? "checkcircleo" : "pluscircleo"

  // console.log(props.book.title, "value is", "initialValue", "With acc", account.cart)

  const [icon, setIcon] = useState(initialValue)

  const goToBookPage = (book: Book) => {
    props.navigation.navigation.navigate('BookDetails', { book: book });
  };
  const addToCart = async () => {
    if (icon == "pluscircleo") {
      axios.post(`${server}/cart/${props.book._id}`, {}, {
        headers: {
          'x-auth-token': account.token,
        },
      })
        .then(result => {
          console.log(`${props.book._id} is added with data ${result.data}`)
          setIcon("checkcircleo")
        })
        .catch((err: AxiosError) => {
          console.log(err.response?.data)
        })
    } else {
      console.log("Already in cart and deleting")
      axios.delete(`${server}/cart/${props.book._id}`, {
        headers: {
          'x-auth-token': account.token,
        },
      })
        .then(result => {
          console.log(`${props.book._id} is deleted with data ${result.data}`)
          setIcon("pluscircleo")
        })
        .catch((err: AxiosError) => {
          console.log(err.response?.data)
        })
    }
  }

  return (
    <TouchableHighlight
      underlayColor={'white'}
      onPress={() => goToBookPage(props.book)}>
      <View style={[styles.card, styles.elevation]}>
        <Image
          resizeMethod="scale"
          style={styles.imageStyle}
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name='star' color={"#FDCC0D"} size={14} />
              <Text style={styles.rating}>{" " + props.book.rating + " "}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              addToCart()
            }}>
              <AntDesign name={icon} size={33} color={"#D4A056"} />
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
    paddingBottom: 5,
    height: "90%",
    width: 170,
    marginVertical: 35,
    marginRight: 15,
    borderColor: "black",
    borderWidth: 2
  },
  imageStyle: {
    height: "65%",
    resizeMode: 'stretch',
    bottom: "19%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: "-15%",
  },
  secondaryText: {
    color: 'black',
    fontSize: 18,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
  rating: {
    fontSize: 14,
    color: "gray"
  }
});
