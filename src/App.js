import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './../src/App.css'

import Signup from './pages/Signup';
import Login from './pages/Login';
// import Private from './pages/Private';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ProfilePageSettings from './components/ProfilePageSettings'

import AnonRoute from './components/AnonRoute';
// import PrivateRoute from './components/PrivateRoute';
import ArticleList from './pages/ArticleList/ArticleList';
import ArticleDetail from './pages/ArticleList/ArticleDetail';
import ProfilePage from './pages/../components/ProfilePage'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profile/settings" component={ProfilePageSettings} />
        <Route exact path="/articles/topics/:name" component={ArticleList} />
        <Route exact path="/articles/:id" component={ArticleDetail} />





          <AnonRoute exact path="/auth/signup" component={Signup} />
          <AnonRoute exact path="/auth/login" component={Login} />
          
        
        </Switch>
      </div>
    );
  }
}

export default App;
