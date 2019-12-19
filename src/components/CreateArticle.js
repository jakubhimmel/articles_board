import React, { Component } from "react";
import articleService from "./../lib/article-service";
import { breakStatement } from "@babel/types";

export default class CreateArticle extends Component {
  state = {
    title: "",
    topic: "",
    description: "",
    image: "",
    text: "",
    errorMessage: ""
  };

  handleFormSubmit = event => {
    if (
      this.state.title === "" ||
      this.state.topic === "" ||
      this.state.description === "" ||
      this.state.text === ""
    ) {
      {
        this.state.errorMessage = "something";
      }
      event.preventDefault();
    } else {
      event.preventDefault();
      const { title, topic, description, image, text } = this.state;
      const newArticle = { title, description, topic, image, text };

      articleService.createNewArticle(newArticle);
      this.props.history.push("/profile");
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, description, topic, image, text } = this.state;
    return (
      <div>
        {this.state.errorMessage ? (
          <div>
            <h1>Write new article</h1>
            <form onSubmit={this.handleFormSubmit}></form>
            <div className="new-article-form">
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
              <input
                type="text"
                name="topic"
                value={topic}
                onChange={this.handleChange}
              />

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
              <div className="create-text">
                <input
                  type="textarea"
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                />
              </div>

              <input class="button" type="submit" value="Post" />
            </div>

            <p>Please provide all information</p>
          </div>
        ) : (
          <div>
            <h1>Write new article</h1>
            <form onSubmit={this.handleFormSubmit}>
              <div className="new-article-form">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />

                <label>Topic:</label>
                <input
                  type="text"
                  name="topic"
                  value={topic}
                  onChange={this.handleChange}
                />

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
                <div className="create-text">
                  <input
                    type="textarea"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                  />
                </div>

                <input class="button" type="submit" value="Post" />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
