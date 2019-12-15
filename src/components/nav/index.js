import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {

    return (
      <nav className="bg-dark text-white py-3">
        <div className="container d-flex align-items-center">
          <h4 className="m-0 mr-5 text-white text-nowrap">Google Books</h4>
          {this.props.activeLink === "search" ?
            (<Link to="/" className="text-light mr-3"><b>Search</b></Link>)
            :
            (<Link to="/" className="text-muted mr-3">Search</Link>)
          }
          {this.props.activeLink === "saved" ?
            (<Link to="/saved" className="text-light mr-3"><b>Saved</b></Link>)
            :
            (<Link to="/saved" className="text-muted mr-3">Saved</Link>)
          }
        </div>
      </nav>
    );
  }
}

export default Nav;