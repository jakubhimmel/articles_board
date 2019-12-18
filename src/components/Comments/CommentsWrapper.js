import React, { Component } from "react";
import commentsService from "../../lib/comments-service";
import NewComment from "./NewComment";
import CommentsList from "./CommentsList";


export default class CommentsWrapper extends Component {
  state = { title: "", text: "", comments: [] };

    componentDidUpdate() {

    }

  handleFormSubmit = event => {
    event.preventDefault();

    const { title, text } = this.state;
    const articleId = this.props.articleId._id;
    const newComment = { title, text };

    commentsService.createNewComment(articleId, newComment)
    .then((res) => { 
        this.props.updateState()
        console.log(res) 
    })
    
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    //   console.log(this.state.comments)
    console.log("S T A T E", this.props.comments);

    return (
      <div>
        <NewComment
            handleChange = {this.handleChange}
            handleFormSubmit= {this.handleFormSubmit}
            title = {this.state.title}
            text = {this.state.text}
        />

        <CommentsList comments = {this.props.comments} />
      </div>
    );
  }
}
