import {book} from './Book';

export type BookDetailsParamList = {
  Home: undefined;
  BookDetails: {book: book};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
