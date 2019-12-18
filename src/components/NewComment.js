import React, { Component } from 'react'
import commentsService from '../lib/comments-service'

export default class NewComment extends Component {
    state = { title: '', text:'' };


    handleFormSubmit = event => {
        event.preventDefault();
        const { title, text } = this.state;
        const newComment = { title, text }


        // commentsService.createnewComment( newComment  ); 
        // this.props.history.push('/profile')
    }

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

      
      
      render() 
      {
          console.log('prooooops', this.props);
          
    const { title,text } = this.state;
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

  <label>Text:</label>
  <input type="text" name="text" value={text} onChange={this.handleChange}/>

          <input type="submit" value="Post" />
        </form>

      </div>
    )
  }}
