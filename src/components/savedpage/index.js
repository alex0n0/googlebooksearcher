import React from 'react';
import Nav from '../nav';
import PageJumbotron from '../pagejumbotron';
import BookList from '../booklist';

import axios from 'axios';

class SavedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: []
    }
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(response => {
        var booksArr = response.data.books;
        booksArr.forEach(curr => {
          curr.deleted = false
        })
        this.setState({
          ...this.state,
          booksArr: booksArr
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  handleDeleteBook = (bookObj) => {
    // console.log('DELETING', bookObj);
    var tempBooksArr = [...this.state.booksArr];
    tempBooksArr[tempBooksArr.indexOf(bookObj)].deleted = true;
    this.setState({
      ...this.state,
      booksArr: tempBooksArr
    });

    axios.delete('/api/books/' + bookObj._id)
      .then(response => {
        var index = tempBooksArr.indexOf(bookObj);
        if (index !== -1) {
          tempBooksArr.splice(index, 1);
        }
        this.setState({
          ...this.state,
          booksArr: tempBooksArr
        });
      })
      .catch(error => {
        console.log(error);
        tempBooksArr[tempBooksArr.indexOf(bookObj)].deleted = false;
        this.setState({
          ...this.state,
          booksArr: tempBooksArr
        });
      });


  }

  render() {
    return (
      <>
        <Nav activeLink="saved" />
        <div className="container">
          <PageJumbotron title="SAVED" />
          <BookList origin="savedpage" booksArr={this.state.booksArr} booksArrEmptyMessage="No books saved" handleDeleteBook={this.handleDeleteBook} />
        </div>
      </>
    );
  }
}

export default SavedComponent;