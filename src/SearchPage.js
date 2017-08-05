import React, { Component } from 'react'
import * as BooksAPI from './BooksShelf'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });

    if (query.trim().length != 0) {
      BooksAPI.search(query.trim(), 5).then(
        (books) => {
          // if there is any books related to search terms
          if (books.length != 0) {
            
          }
        }
      )
    }
  }

  render() {
    const { query } = this.state;

    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => this.updateQuery(event.target.value)}
            value={query}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  }
}

export default SearchPage;
