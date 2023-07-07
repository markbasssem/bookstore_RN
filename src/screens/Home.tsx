import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {IMAGE_URL} from './constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {book} from '../types/Book';
import BookCard from '../components/BookCard';

type Props = NativeStackScreenProps<any, any>;

export default function Home(props: Props): JSX.Element {
  const [books, setBooks] = useState<book[]>([
    {
      _id: '649080d4fb1acbd592d979d7',
      title: 'Sad days',
      rating: 11,
      author: 'Mark',
      genre: ['classic', 'drama'],
      selling: 7,
      image:
        'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
    },
    {
      _id: '6490809bfb1acbd592d979d5',
      title: 'Wind of time',
      rating: 10,
      author: 'Mark',
      genre: ['sci-fi', 'horror'],
      selling: 6,
      image: IMAGE_URL,
    },
    {
      _id: '6490809bfb1acbd592d979d5',
      title: 'Wind of time',
      rating: 10,
      author: 'Mark',
      genre: ['sci-fi', 'horror'],
      selling: 6,
      image:
        'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
    },
    {
      _id: '649080d4fb1acbd592d979d7',
      title: 'Sad days',
      rating: 11,
      author: 'Mark',
      genre: ['classic', 'drama'],
      selling: 7,
      image: IMAGE_URL,
    },
    {
      _id: '6490809bfb1acbd592d979d5',
      title: 'Wind of time',
      rating: 10,
      author: 'Mark',
      genre: ['sci-fi', 'horror'],
      selling: 6,
      image:
        'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
    },
    {
      _id: '649080d4fb1acbd592d979d7',
      title: 'Sad days',
      rating: 11,
      author: 'Mark',
      genre: ['classic', 'drama'],
      selling: 7,
      image: IMAGE_URL,
    },
    {
      _id: '6490809bfb1acbd592d979d5',
      title: 'Wind of time',
      rating: 10,
      author: 'Mark',
      genre: ['sci-fi', 'horror'],
      selling: 6,
      image:
        'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
    },
  ]);
  const [refresh, setRefresh] = useState(true);
  const fetchBooks = () => {
    // setRefresh(true)
    fetch('http://192.168.1.13:3000/aggr')
      .then(res => {
        res.json().then((data: book[]) => {
          console.log('Got dataa', data[0]);
          setBooks(data);
          setRefresh(false);
        });
      })
      .catch(err => {
        alert(err);
        setRefresh(false);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
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
