import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Book} from '../types/Book';
import BookCard from '../components/BookCard';
import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import axios from 'axios';
import AppBar from '../components/AppBar';
import { server } from './constants';

type Props = NativeStackScreenProps<any, any>;

export default function Home(props: Props): JSX.Element {
  const [books, setBooks] = useState<Book[]>([
    // {
    //   _id: '649080d4fb1acbd592d979d7',
    //   title: 'Sad days',
    //   rating: 11,
    //   author: 'Mark',
    //   genre: ['classic', 'drama'],
    //   selling: 7,
    //   image:
    //     'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
    // },
    // {
    //   _id: '6490809bfb1acbd592d979d5',
    //   title: 'Wind of time',
    //   rating: 10,
    //   author: 'Mark',
    //   genre: ['sci-fi', 'horror'],
    //   selling: 6,
    //   image: IMAGE_URL,
    // },
  ]);

  const account = useSelector((state: RootState) => state.account);
  console.log('Current account', account);
  const [refresh, setRefresh] = useState(true);
  BackHandler.addEventListener('hardwareBackPress', () => true);
  const fetchBooks = () => {
    // setRefresh(true)
    axios
      .get(`${server}:3000/books/`, {
        headers: {
          'x-auth-token': account.token,
        },
      })
      .then(res => {
        if (res.status === 200) {
          setBooks(res.data);
          setRefresh(false);
        }
      })
      .catch(err => {
        console.log(err);
        setRefresh(false);
      });
  };

  useEffect(() => {
    // fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <AppBar navigation={props.navigation} />
      <Text style={styles.titleStyle}>Books</Text>
      <View>
        <FlatList
          data={books}
          horizontal
          refreshing={refresh}
          onRefresh={fetchBooks}
          renderItem={item => <BookCard book={item.item} navigation={props} />}
        />
      </View>
      <View style={{height: 200}}>
        <FlatList
          data={books}
          renderItem={item => <BookCard book={item.item} navigation={props} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1, padding: 10},
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 13,
  },
  secondaryText: {
    color: 'black',
  },
});
