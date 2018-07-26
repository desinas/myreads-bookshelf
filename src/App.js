import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books }) //implicity change state
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books }) //implicity change state
    })
  }

  render() {
    console.log(this.state.books); //test on dev

    return (
      <div className="app">
      
      <Route exact path="/" render={ () => (<MainPage 
          books={this.state.books}
              moveShelf={this.moveShelf} />) } />
      
      <Route path="/search" render={ () => (<SearchPage 
          moveShelf={this.moveShelf}
          books={this.state.books} />) } />

      </div>
    )
  }
}

export default BooksApp
