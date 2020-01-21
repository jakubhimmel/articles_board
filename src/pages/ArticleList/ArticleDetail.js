import React, { Component } from "react";
import articleService from "./../../lib/article-service";
import CommentsWrapper from "../../components/Comments/CommentsWrapper";
import { withAuth } from '../../lib/AuthProvider';

class articleDetail extends Component {
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
    const { isLoggedin } = this.props;
    console.log(this.state.articleDetail);
    console.log("my props",this.props);

const date = this.state.articleDetail.created_at; 

const dateNew = String(date);

const year = dateNew.slice(0,4);
const monthInt = dateNew.slice(5,7);
const day =dateNew.slice(8,10);


if(monthInt === 1) {var newMonth = 'january'}
if(monthInt === 2) {var newMonth = 'february'}
if(monthInt === 3) {var newMonth = 'march'}
if(monthInt === 4) {var newMonth = 'april'}
if(monthInt === 5) {var newMonth = 'may'}
if(monthInt === 6) {var newMonth = 'june'}
if(monthInt === 7) {var newMonth = 'july'}
if(monthInt === 8) {var newMonth = 'august'}
if(monthInt === 9) {var newMonth = 'september'}
if(monthInt === 10) {var newMonth = 'october'}
if(monthInt === 11) {var newMonth = 'november'}
if(monthInt === 12) {var newMonth = 'december'}


const formattedTime = day + ' ' + newMonth + ' ' + year;


    console.log('DATE',this.state.articleDetail)


    return (
      <div>
        <div className='article-top preview-pic'>
          { isLoggedin ? (
            <div>
        <h1> {this.state.articleDetail.title} </h1>
        <p className='article-description'> {this.state.articleDetail.description} </p>
                <p> {formattedTime} </p>


        <img src={this.state.articleDetail.image} alt="articles header"></img>
        <p className= 'text'> {this.state.articleDetail.text} </p>

        
        <div className='article-score'>


        <p>{this.state.articleDetail.score}</p>

        <div className="buttons">
        <button
          onClick={() => {
            this.scoreHandler(+1);
          }}
        >
          <p>Up vote</p>
        </button>
        <button
          onClick={() => {
            this.scoreHandler(-1);
          }}
        >
          <p>Down vote</p>
        </button>

        <button>Add to favorites</button>
        </div>
        </div>

        <CommentsWrapper
          comments={this.state.articleDetail.comments}
          articleId={this.state.articleDetail}
          updateState={this.updateState}
        />
          </div>
          ) : (
            <div>
            <div className='article-top preview-pic' >
        <h1> {this.state.articleDetail.title} </h1>
        <p className='article-description'> {this.state.articleDetail.description} </p>
                <p> {formattedTime} </p>


        <img src={this.state.articleDetail.image} alt="articles header"></img>
        <p className= 'text'> {this.state.articleDetail.text} </p>



        </div>

        <CommentsWrapper
          comments={this.state.articleDetail.comments}
          articleId={this.state.articleDetail}
          updateState={this.updateState}
        />
        </div>

          )
          }
      </div>
      </div>
    );
  }
}


export default withAuth(articleDetail);
