import {Book} from './Book';

export type BookDetailsParamList = {
  Home: undefined;
  BookDetails: {book: Book};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
