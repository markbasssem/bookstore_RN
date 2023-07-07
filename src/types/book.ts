import { author } from "./author";

export type book = {
    _id: string;
    title: string;
    rating: number;
    selling: number;
    author: author;
    genre: string[];
    image: string;
    pages: number;
  };