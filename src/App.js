import React, { Component } from 'react';
import Signin from './containers/Signin/Signin';
import Home from './components/Home/Home';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" exact component={Signin} />
        <Route path="/home" exact component={Home} />
      </div>
    );
  }
}

export default App;
