# MyReads Project

Thiss is my MyReads project from Udacity's React course. There are some modifications regarding the original BooksAPI provided by Udacity. Feel free to criticize my decisions but the objective was to give more flexibility to the search functionality.
#####**Important:** ***Your shelves start empty, you have to use the search functionality to find new books to add to your shelves.**

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important Files
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Custom CSS
    ├── App.js # Where everything begins.
    ├── BooksAPI.js # A JavaScript API for the Google Books API. Instructions for the methods are below.
    ── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## BooksAPI Backend Server

To simplify your development process, I've provided a backend server for you to develop against. It uses the Google Books API. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`get`](#get)
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `get`

Method Signature:

```js
get(bookId)
```
* bookId: `<Object>` the id of the book to fetch.
* Returns a Promise which resolves to a JSON object containing the book object.

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
