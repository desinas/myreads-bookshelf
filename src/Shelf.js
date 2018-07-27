import React from 'react'

import Book from './Book.js'

/**
 * @description Create shelf component to be rendered in myreads
 * app component at the three faces of reading. This component has
 * book as a child so to render them in every shelf of the bookshelf.
 * The books string array that comes with props is filtered to match
 * the current shelf and the remaining books to maped in a display grid.
 */
function Shelf (props) {
    return( <div className="bookshelf">
    <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {
        props.books
          .filter(book => book.shelf === props.currentShelf)
          .map(book => ( <li key={book.id}>
                  <Book book={book} 
                        changeShelf={props.changeShelf} 
                        currentShelf={props.currentShelf}
                        />
                         </li> ))
      }
      </ol>
    </div>
  </div> )
}

export default Shelf
