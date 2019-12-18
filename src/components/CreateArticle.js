import React, { Component } from 'react'
import articleService from './../lib/article-service'

export default class CreateArticle extends Component {
    state = { title: '', topic:'', description: '',image: '', text:'' };


    handleFormSubmit = event => {
        event.preventDefault();
        const { title,topic,description, image, text } = this.state;
        const newArticle = { title, description,topic, image, text }


        articleService.createNewArticle( newArticle  ); 
        this.props.history.push('/profile')
    }

      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

      
      
      render() 
      {
          console.log('prooooops', this.props);
          
    const { title, description,topic,image,text } = this.state;
    return (
      <div>
        <h1>Write new article</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          {/* <label>Topic:</label>

          <select name="topic">
    <option name="topic" value={topic}  onChange={this.handleChange}>politics</option>
    <option name="topic" value={topic} onChange={this.handleChange}>future</option>
    <option name="topic" value={topic} onChange={this.handleChange}>technology</option>
    <option name="topic" value={topic} onChange={this.handleChange}>health</option>
    <option name="topic" value={topic} onChange={this.handleChange}>zero-waste</option>
    <option name="topic" value={topic} onChange={this.handleChange}>food</option>
    <option name="topic" value={topic} onChange={this.handleChange}>design</option>
    <option name="topic" value={topic} onChange={this.handleChange}>culture</option>
    
  </select> */}


  <label>Topic:</label>
  <input type="text" name="topic" value={topic} onChange={this.handleChange}/>




          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            placeholder="provide an url of the image"
            value={image}
            onChange={this.handleChange}
          />

          <label>Text:</label>
          <input
            type="textarea"
            name="text"
            value={text}
            onChange={this.handleChange}
          />


          <input type="submit" value="Post" />
        </form>

      </div>
    )
  }}
