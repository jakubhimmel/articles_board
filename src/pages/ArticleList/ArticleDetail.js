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

const date = this.state.articleDetail.created_at; 

const dateNew = String(date);

const year = dateNew.slice(0,4);
const month = dateNew.slice(5,7);
const day =dateNew.slice(8,10);

console.log(month);

if(month ==12) { var newMonth = 'december'
}


const formattedTime = day + ' ' + newMonth + ' ' + year;


    console.log('DATE',this.state.articleDetail)


    return (
      <div>
        <div className='article-top'>
        <h1> {this.state.articleDetail.title} </h1>
        <p className='article-description'> {this.state.articleDetail.description} </p>
                <p> {formattedTime} </p>


        <img src={this.state.articleDetail.image} alt="articles header"></img>
        <p className= 'text'> {this.state.articleDetail.text} </p>

        </div>
        <div className='article-score'>


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

        </div>

        <CommentsWrapper
          comments={this.state.articleDetail.comments}
          articleId={this.state.articleDetail}
          updateState={this.updateState}
        />
      </div>
    );
  }
}
