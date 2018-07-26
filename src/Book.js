import React, { Component } from 'react';

class Book extends Component {
  render() {
    // console.log(this.props.books); test on dev

    return( <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193,
          backgroundImage: `url( ${this.props.book ? this.props.book.imageLinks.thumbnail : null} )` }}>
        </div>
        <div className="book-shelf-changer">
          <select
              onChange={ (event) => this.props
                    .moveShelf( this.props.book, event.target.value )} 
              value={this.props.book.shelf}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{this.props.book ? this.props.book.title : null}</div>
      <div className="book-authors">{this.props.book ? this.props.book.authors : null}</div>
    </div> );
  }
}

export default Book;
