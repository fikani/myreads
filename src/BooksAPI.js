import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';

const api = 'https://www.googleapis.com/books/v1';

PouchDB.plugin(PouchFind);
const db = new PouchDB('myreads_');

export const get = (bookId) =>
  fetch(`${api}/volumes/${bookId}`)
    .then(res => res.json());

export const getAll = () =>
  db.allDocs({
    include_docs: true
  }).then(function (result) {
    return result.rows.map(i=>i.doc);
  }).catch(function (err) {
    return [];
  });

export const update = (book, shelf) => {
  book.shelf = shelf;
  return db.put(book)
  .then( (result) => {
    book._rev = result.rev;
    return book;
  })
  .catch((err) =>
    db.get(book._id)
    .then((doc) => update(doc, shelf))
  );
};

export const search = (query, maxResults) => {
  return fetch(`${api}/volumes?maxResults=12&q=${query}`)
    .then(res => res.json())
    .then(data => data.items)
    .then(items => {
      if (items) return syncDB(items);
      else return [];
    });
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
