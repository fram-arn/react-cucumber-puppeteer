import React, { Component } from 'react';
import Signin from './containers/Signin/Signin';
import Home from './components/Home/Home';
import './App.css';
import {Route} from 'react-router-dom';
import PrivateRouter from './components/common/PrivateRouter';

class App extends Component {
  state = {
    isAuthenticated: false,
    isLoading: false
  }

  handleSignin = () => {
    this.setState({
      isAuthenticated: true
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" exact render={() => <Signin onSignin={() => this.handleSignin()} />} />
        <PrivateRouter path="/home" authenticated={this.state.isAuthenticated} exact component={Home} />
      </div>
    );
  }
}

export default App;
