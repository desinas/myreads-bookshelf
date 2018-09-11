import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

/**
 * @description Implementation of the search page with functionality
 * of fetching books from the backend according the query input chars.
 * When some chars is insered in the search form then a result of 
 * book collection is displyed in this page from a pre defined list
 * of standard queries. This page component is statefull means that
 * have the ability to recond the current search results and its query.
 */
class SearchPage extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  /**
   * @description Set the state of query for the current result
   * @param {string} query - The input chars from the search form
   */  
  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }

  /**
   * @description Call API method to search the query and return
   * a promise and then check for error and overcome it, else
   * return the result of book collection
   * @param {string} query - The query passed from update query
   */
  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
        this.setState({ searchedBooks }); //ES6 shorthand syntax
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  searchBooks() {
    return this.state.searchedBooks.map(searchedBook => {
      let shelf = "none"; //this option preselected for unassigned book
      this.props.books.map(book => (book
        .id === searchedBook.id ?
        shelf = book.shelf : ''));
      return (<li key={searchedBook.id}>
        <Book book={searchedBook}
              changeShelf={this.props.changeShelf}
              currentShelf={shelf} />
      </li>);
    });
  }

  render() {
    return ( <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search" onClick={() => this
            .setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">

          <input type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.searchBooks()
          }
        </ol>
      </div>
    </div> );
  }

}

export default SearchPage
