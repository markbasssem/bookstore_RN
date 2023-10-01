import React, { useEffect, useState } from 'react';
import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Book } from '../types/Book';
import BookCard from '../components/BookCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import axios from 'axios';
import AppBar from '../components/AppBar';
import { server } from './constants';
type Props = NativeStackScreenProps<any, any>;

export default function Home(props: Props): JSX.Element {
  const [books, setBooks] = useState<Book[]>([])
  const [featured, setFeatured] = useState<Book[]>([]);

  const account = useSelector((state: RootState) => state.account);
  console.log('Current account', account);
  const [refresh, setRefresh] = useState(true);

  const fetchBooks = () => {
    axios
      .get(`${server}/books/`, {
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
    fetchBooks();
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
          style={{height: 300}}
          renderItem={item => <BookCard book={item.item} navigation={props} />}
        />
        <Text style={styles.titleStyle}>Books</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1, padding: 10 },
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
