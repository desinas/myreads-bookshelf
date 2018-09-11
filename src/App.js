import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import TitleSearcher from './TitleSearcher'
import './App.css'

const baseUrl = process.env.PUBLIC_URL;

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
    console.log("This is the process.env", process.env.PUBLIC_URL)

    return (
      <div className="app">
      
      <Route exact path={baseUrl + "/"} render={ () => (<MyReads 
          books={this.state.books}
            baseUrl={baseUrl}
              changeShelf={this.changeShelf} />) } />
      
      <Route path={baseUrl + "/search"} render={ () => (<TitleSearcher 
          changeShelf={this.changeShelf}
          books={this.state.books}
          baseUrl={baseUrl} />) } />

      </div>
    )
  }
}

export default App
