import { update } from '../BooksAPI';

export const WANT_READ = "wantToRead";
export const READ = "read";
export const READING = "currentlyReading";

export const moveToWantToRead = (book) => update(book, WANT_READ)
export const moveToRead = (book) => update(book, READ)
export const moveToReading = (book) => update(book, READING)
