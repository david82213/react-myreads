import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                shelf={book.shelf}
                title={book.title}
                imageLinks={book.imageLinks}
                authors={book.authors}
                onUpdateBook={(shelf) => {this.props.onUpdateBook(book.id, shelf)}}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;