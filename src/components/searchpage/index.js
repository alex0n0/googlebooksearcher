import React from 'react';
import Nav from '../nav';
import PageJumbotron from '../pagejumbotron';
import SearchSection from '../searchsection';
import BookList from '../booklist';

import axios from 'axios';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: []
    }
  }

  returnSearchedBooks = (booksArr) => {
    booksArr.forEach(curr => {
      curr.saved = false
    })
    this.setState({
      ...this.state,
      booksArr: booksArr
    });
  }

  handleSaveBook = (bookObj) => {
    // console.log('SAVING', bookObj);
    var tempBooksArr = [...this.state.booksArr];
    tempBooksArr[tempBooksArr.indexOf(bookObj)].saved = true;
    this.setState({
      ...this.state,
      booksArr: tempBooksArr
    });

    axios.post('/api/books', bookObj)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        tempBooksArr[tempBooksArr.indexOf(bookObj)].saved = false;
        this.setState({
          ...this.state,
          booksArr: tempBooksArr
        });
      })
  }

  render() {
    return (
      <>
        <Nav activeLink="search" />
        <div className="container">
          <PageJumbotron title="SEARCH" />
          <SearchSection returnSearchedBooks={this.returnSearchedBooks} />
          <BookList origin="searchpage" booksArr={this.state.booksArr} booksArrEmptyMessage="No results" handleSaveBook={this.handleSaveBook} />
        </div>
      </>
    );
  }
}

export default SearchComponent;