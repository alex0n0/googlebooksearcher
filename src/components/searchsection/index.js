import React from 'react';
import axios from 'axios';

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: ''
    }
    this.handleFormSubmit.bind(this);
    this.handleSearchInputChange.bind(this);
    this.handleFormClear.bind(this);
  }

  handleSearchInputChange = (e) => {
    this.setState({
      ...this.state,
      searchinput: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    var searchString = this.state.searchinput.trim();
    if (searchString.length > 0) {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchString)
        .then(response => {
          if (response.data.items) {
            var tempBooksArr = response.data.items;
            var booksArr = tempBooksArr.map(curr => {
              return {
                _id: curr.id,
                title: curr.volumeInfo.title,
                authors: curr.volumeInfo.authors,
                description: curr.volumeInfo.description,
                image: curr.volumeInfo.imageLinks.thumbnail,
                url: curr.volumeInfo.infoLink,
                isbn: curr.volumeInfo.industryIdentifiers
              }
            });
            this.props.returnSearchedBooks(booksArr);
          } else {
            this.props.returnSearchedBooks([]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleFormClear = () => {
    this.setState({
      ...this.state,
      searchinput: ''
    });
  }

  render() {
    return (
      <>
        <div className="border bg-white p-3 m-0 my-3 overflow-hidden">
          <h5 className="text-truncate">Search</h5>
          <hr className="m-0 mb-3" />
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="searchinput text-truncate">Book</label>
            <input id="searchinput" className="form-control mb-3" type="text" placeholder="Enter a book name" onChange={this.handleSearchInputChange} value={this.state.searchinput} />
            <div className="d-flex justify-content-end">
              {/* <button id="formclear" className="mr-1 btn btn-danger overflow-hidden" onClick={this.handleFormClear}>Clear</button> */}
              <button id="formsubmit" className="btn btn-primary overflow-hidden" type="submit">Search</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchSection;