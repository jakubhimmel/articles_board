import React, { Component } from "react";
import articleService from "./../../lib/article-service";
import CommentsWrapper from "../../components/Comments/CommentsWrapper";

// import { Link } from 'react-router-dom';

export default class ArticleDetail extends Component {
  state = {
    articleDetail: {}
  };

  scoreHandler = value => {
    const { id } = this.props.match.params;

    let newScore = this.state.articleDetail.score;

    newScore += value;

    articleService.updateScore(id, newScore).then(res => {
      this.setState({ articleDetail: res });
    });
  };

  updateState=()=> {
    const { id } = this.props.match.params;
    articleService.articleDetailById(id).then(res => {
        this.setState({ articleDetail: res });
      });
  }

  componentDidMount() {
    this.updateState()
  }



  render() {
    console.log(this.state.articleDetail);
    console.log("mz props",this.props);
    return (
      <div>
        <h1> {this.state.articleDetail.title} </h1>
        <img src={this.state.articleDetail.image} alt="articles header"></img>
        <p> {this.state.articleDetail.text} </p>
        <p> {this.state.articleDetail.created_at} </p>

        <p>{this.state.articleDetail.score}</p>

        <button
          onClick={() => {
            this.scoreHandler(+1);
          }}
        >
          Up vote
        </button>
        <button
          onClick={() => {
            this.scoreHandler(-1);
          }}
        >
          Down vote
        </button>

        <button>Add to favorites</button>

        <CommentsWrapper
          comments={this.state.articleDetail.comments}
          articleId={this.state.articleDetail}
          updateState={this.updateState}
        />
      </div>
    );
  }
}
