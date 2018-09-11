# MyReads Bookshelf [project](https://myreads-bookshelf.netlify.com)

In MyReads Bookshelf project, a bookshelf app was built on React library, that allows the user to select and categorize books have already read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library to use in order to persist information as user interact with the application.

Using the [starter template](https://github.com/udacity/reactnd-project-myreads-starter), for Udacity's React Fundamentals course, of Front-EndNDegree, a bookshelf app implementation on React. It is a static example of the CSS and HTML markup that may be used. With this template, the job already done is to add interactivity to the app by refactoring the static code in this template.

This template was build using react bootstrapper [Create React App](https://github.com/facebookincubator/create-react-app).

## Local Installing

To get started developing right away:

* install all project dependencies with `npm install`
* another library needed to implement app routing, so to use it run `npm install --save react-router-dom`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. React main component.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # React component to display books on shelves.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # It is used for DOM rendering. Browser Routing added.
    ├── MyReads.js # React component for the main page of the application.
    ├── Shelf.js # React component for every self of the bookshelf app.
    ├── TitleSearcher.js # React component for searching and display results.
```

Good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed. The application is structured in a basic degree. 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

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
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
