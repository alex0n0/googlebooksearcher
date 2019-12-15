import React from 'react';

class PageJumbotron extends React.Component {
  render() {
    return (
      <>
        <div className="bg-warning text-center py-5 px-3 m-0 my-3 overflow-hidden">
          <p className="small text-muted m-0 text-truncate">GOOGLE BOOKS SEARCH</p>
          <h1 className="m-0 text-truncate">{this.props.title}</h1>
        </div>
      </>
    );
  }
}

export default PageJumbotron;