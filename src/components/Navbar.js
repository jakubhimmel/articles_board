import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
       <div className = 'nav-bar'>
        {isLoggedin ? (
          <div className="navbar">
            
          <div className='navbar-menu'>
            <Link to="/homepage">
            <h3>write.it</h3>
            </Link>
            <Link to="/homepage">
              <p>Home</p>
            </Link>

            <Link to="/profile/create-article">
              <p>Write</p>
            </Link>
            
            
            </div>

            <div className='user-info'>
              <div className="left">
              <Link to="/profile"><img src='https://c7.uihere.com/icons/629/613/248/user-avatar-0ac331edcf7e5061afc12cca37be2489.png'></img>
            <p>{user.username}</p></Link>
            </div>
            <p onClick={logout}>Logout</p>
            </div>

           
          </div>
        ) : (
          <div className = "navbar">
          <div className='navbar-menu'>
          <Link to="/homepage">
            <h3>write.it</h3>
            </Link>
            <Link to="/homepage">
              <p>Home</p>
            </Link>

            <Link to="/profile/create-article">
              <p>Write</p>
            </Link>
            </div>

          <div className='login'>
            <Link to="/auth/login">

              <p>Login</p>
            </Link>
          <Link to='/auth/signup'>
              <p>Signup</p>
            </Link>
            <br/>
            </div>

         
           
          </div>
        )}
      </div>
      </div>
    );
  }}
    

export default withAuth(Navbar);
