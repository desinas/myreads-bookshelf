import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf.js'

/**
 * @description Implement of the main page component of the app,
 * that has child the shelf, which has child the book component.
 * @prop {string} books - Array of books fetched from backend
 * @prop {string} currentShelf - hard code string of the read face
 * @prop {string} bookshelfTitle - The name of the shelf
 * @prop {method} changeShelf - Change shelf functionality
 */
class MyReads extends Component {
  render() {
    // console.log(this.props.books); //test on dev

    return( <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf books={this.props.books}
              currentShelf='currentlyReading'
              bookshelfTitle="Currently Reading"
              changeShelf={this.props.changeShelf} />

          <Shelf books={this.props.books}
              currentShelf='wantToRead'
              bookshelfTitle="Want to Read"
              changeShelf={this.props.changeShelf} />

          <Shelf books={this.props.books}
              currentShelf='read'
              bookshelfTitle="Read"
              changeShelf={this.props.changeShelf} />

        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div> );
  }
}

export default MyReads;
