import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';

const GoogleBooksEndpoint = 'https://www.googleapis.com/books/v1';
const CURRENTLY_READING = 'reading';
const WANT_READ = 'want';
const READ = 'read';

PouchDB.plugin(PouchFind);
const db = new PouchDB('myreads');

export const search = (query) => {
  return fetch(`${GoogleBooksEndpoint}/volumes?maxResults=12&q=${query}`)
    .then(res => res.json())
    .then(data => data.items)
    .then(items => syncDB(items));
};

const syncDB = (items) => {
  const ids = items.map(item => item.id);
  return db.find({selector: {id: {$in: ids }}})
  .then(dbItems => {
    const dbIds = dbItems.docs.map(item => item.id);
    const newItems = items.filter(item => !dbIds.includes(item.id));
    return db.bulkDocs(newItems)
    .then((inserts) => db.find({selector: {id: {$in: ids }}}))
    .then(result => result.docs)
    .catch(result => console.log(result));
  });
};

//offline content
const getShelf = (shelfName) => {
  return db.find({
    selector: {shelf: shelfName}
  })
  .then(result => result.docs)
  .catch(error => []);
};

export const getCurrentlyReading = () => {
  return getShelf(CURRENTLY_READING);
};

export const getWannaRead = () => {
  return getShelf(WANT_READ)
};

export const getRead = () => {
  return getShelf(READ);
};

const setShelf = (shelf, item) => {
  item.shelf = shelf;
  db.put(item);
};

export const setShelfRead = (book) => {
  setShelf(READ, book);
};

export const setShelfWannaRead = (book) => {
  setShelf(WANT_READ, book);
};

export const setShelfReading = (book) => {
  setShelf(CURRENTLY_READING, book);
};

(()=>{
  db.createIndex({
    index: {fields: ['shelf']}
  }).catch(err => {console.log(err);});
  db.createIndex({
    index: {fields: ['id']}
  }).catch(err => {console.log(err);});
})();
