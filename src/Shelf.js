import React from 'react'

import Book from './Book.js'

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
