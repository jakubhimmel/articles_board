import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { username: '', password: '',email: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;
    //  console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password, email }); // props.signup is Provided by withAuth() and Context API
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password,email } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />


          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />


          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={'/auth/login'}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
