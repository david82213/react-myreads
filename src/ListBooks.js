import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  const shelf = [
    {
      api: 'currentlyReading',
      name: 'Currently Reading'
    },
    {
      api: 'wantToRead',
      name: 'Want to Read'
    },
    {
      api: 'read',
      name: 'Read'
    }
  ]

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelf.map(
              (diffShelf,index) => (
                <BookShelf
                  key={index}
                  title={diffShelf.name}
                  books={this.props.books.filter((book) => book.shelf == diffShelf.api)}
                  onUpdateBook={
                    (book, shelf) => {
                      this.props.onUpdateBook(book, shelf)
                    }
                  }
                />
              )
            )}
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
