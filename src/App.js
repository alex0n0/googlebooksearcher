import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import SearchComponent from './components/searchpage';
import SavedComponent from './components/savedpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a'
    }
  }

  render() {
    return (
      <>
          <BrowserRouter>
            <Route exact path="/" component={SearchComponent}/>
            <Route path="/saved" component={SavedComponent}/>
          </BrowserRouter>
      </>
    );
  }
}

export default App;
