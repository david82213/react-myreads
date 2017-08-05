import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      (books) => this.setState({ books })
    )
  }

  updateBook = (book, shelf) => {
    BooksAPI.update({id},shelf).then(
      ()=>{BooksAPI.getAll().then(
        (books) => this.setState({ books })
      )}
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={({ history }) => (
            <SearchPage
              books={this.state.books}
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf)
                history.push("/")
              }}
            />
          )}
        />

        <Route path="/" render={() => (
            <BookList books={this.state.books}
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
