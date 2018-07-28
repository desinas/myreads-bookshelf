import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import TitleSearcher from './TitleSearcher'
import './App.css'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books }) //implicity change state
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => { //chained with then
      BooksAPI.getAll().then((books) => {     //so will exec after
        this.setState({ books: books })      //the first resolved
      })
    })

    
  }

  render() {
    // console.log(this.state.books); //test on dev

    return (
      <div className="app">
      
      <Route exact path="/" render={ () => (<MyReads 
          books={this.state.books}
              changeShelf={this.changeShelf} />) } />
      
      <Route path="/search" render={ () => (<TitleSearcher 
          changeShelf={this.changeShelf}
          books={this.state.books} />) } />

      </div>
    )
  }
}

export default App
