import { book } from "./Book";

export type RootStackParamList = {
    Home: undefined;
    BookDetails: { book: book };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };