import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
       <div 
        style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
        {isLoggedin ? (
          <div className="navbar">
            
          <div className='navbar-menu'>
            <Link to="/homepage">
              <button>Home</button>
            </Link>

            <Link to="/profile">
              <button>Profile</button>
            </Link>
            
            
            </div>

            <div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
            </div>

           
          </div>
        ) : (
          <div className = 'navbar'>
          <div className='navbar-menu'>
            <Link to="/homepage">
              <button>Home</button>
            </Link>

            <Link to="/profile">
              <button>Profile</button>
            </Link>
            </div>

          <div className="is-logged-in">
            <Link to="/auth/login">
              {' '}
              <button>Login</button>{' '}
            </Link>
            <br />
            <Link to="/auth/signup">
              {' '}
              <button>Signup</button>{' '}
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
