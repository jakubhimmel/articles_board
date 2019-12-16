import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './../src/App.css'

import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import ArticleList from './pages/ArticleList/ArticleList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/articles/topics/:name" component={ArticleList} />


          <AnonRoute exact path="/auth/signup" component={Signup} />
          <AnonRoute exact path="/auth/login" component={Login} />
          
        
        </Switch>
      </div>
    );
  }
}

export default App;
