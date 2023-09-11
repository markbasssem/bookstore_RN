import {Author} from './Author';

export type Book = {
  _id: string;
  title: string;
  rating: number;
  selling: number;
  author: Author;
  genre: string[];
  image: string;
  pages: number;
  description: string;
};
