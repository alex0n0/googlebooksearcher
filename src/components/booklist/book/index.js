import React from 'react';

import './book.css';

class Book extends React.Component {

    render() {
        var button;
        if (this.props.origin === "searchpage") {
            button = (
                <button className="m-0 btn btn-success btn-sm btn-block d-flex align-items-center justify-content-center" 
                    disabled={this.props.book.saved}
                    onClick={() => { this.props.handleSaveBook(this.props.book) }}>
                    <i className="material-icons mr-1" style={{ fontSize: "1.2rem" }}>save</i>
                    Save
                </button>
            )
        } else if (this.props.origin === "savedpage") {
            button = (
                <button className="m-0 btn btn-danger btn-sm btn-block d-flex align-items-center justify-content-center" 
                    disabled={this.props.book.deleted}
                    onClick={() => { this.props.handleDeleteBook(this.props.book) }}>
                    <i className="material-icons mr-1" style={{ fontSize: "1.2rem" }}>delete</i>
                    Delete
                </button>
            )
        }
        return (
            <>
                <div className="bookContainer border p-3 row m-0 no-gutters my-3">
                    <div className="order-1 order-sm-1 col flex-grow-1 flex-shrink-1 d-flex align-items-center">
                        <p className="m-0 title"><b>{this.props.book.title}</b></p>
                    </div>
                    <div className="order-3 order-sm-2 col-12 col-sm mt-3 m-sm-0 flex-grow-0 flex-shrink-0 d-flex align-items-center">
                        <a href={this.props.book.url} target="_blank" rel="noopener noreferrer" className="m-0 mr-1 btn btn-secondary btn-sm btn-block d-flex align-items-center justify-content-center link">
                            <i className="material-icons mr-1" style={{ fontSize: "1.2rem" }}>visibility</i>
                            View
                        </a>
                        {button}
                    </div>
                    <div className="order-2 order-sm-3 col-12">
                        <p className="small m-0">
                            <span className="text-muted">Written by</span> <span className="authors">{this.props.book.authors.join(', ')}</span>
                        </p>
                    </div>
                    <div className="order-4 col-12 pt-3">
                        <div className="row">
                            <div className="col" style={{ "flex": "0 0 175px" }}>
                                <img src={this.props.book.image} alt="demo book" width="100%" height="auto" />
                            </div>
                            <div className="col description">
                                <p>{this.props.book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Book;