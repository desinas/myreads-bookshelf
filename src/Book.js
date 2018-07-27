import React from 'react'

/**
 * @description Create book component to display book cover, title
 * and authors of every book. If book cover missing at a book, avoid
 * undefined message by giving an empty background image.
 * In every book is attached a button as a shelf changer for the user
 * to select from a drop down menu the choice for the reading fase.
 */
function Book (props) {
  // console.log(props.books); test on dev

  return( <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url( ${props.book.imageLinks ? 
                  props.book.imageLinks.thumbnail : '' } )` }}>
      </div>
      <div className="book-shelf-changer">
        <select
            onChange={ (event) => props
                  .changeShelf( props.book, event.target.value )} 
            value={props.currentShelf}>
            
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">
      {props.book ? props.book.title : null}
    </div>
    <div className="book-authors">
      {props.book ? props.book.authors : null}
    </div>
  </div> )
  
}

export default Book
