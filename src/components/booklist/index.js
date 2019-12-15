import React from 'react';
import Book from './book';

class BookList extends React.Component {

  render() {
    return (
      <>
        <div className="border bg-white p-3 m-0 my-3 overflow-hidden">
          <h5 className="text-truncate">Results</h5>
          <hr className="m-0 mb-3" />
          <div>
            { this.props.booksArr.map(curr => 
              (<Book 
                origin={this.props.origin}
                key={curr._id} 
                book={curr} 
                handleDeleteBook={this.props.handleDeleteBook} 
                handleSaveBook={this.props.handleSaveBook}/>
              )
            ) }
            { this.props.booksArr.length === 0 ? (<p className="text-center m-0">{this.props.booksArrEmptyMessage}</p>): "" }
          </div>
        </div>
      </>
    );
  }
}

export default BookList;