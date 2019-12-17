import React, { Component } from 'react'
import articleService from "./../../lib/article-service";
// import { Link } from 'react-router-dom';


export default class ArticleDetail extends Component {
    state = {
        articleDetail: ''
    };
    componentDidMount() {
        const { id } = this.props.match.params;
    
        articleService.articleDetailById( id ).then(res => {
    console.log(res);
    
          this.setState({ articleDetail: res });
        });
      }




    render() {
        return (
            <div>
                <h1> {this.state.articleDetail.title} </h1>
                <img src={this.state.articleDetail.image}></img>
                <p> {this.state.articleDetail.text} </p>
                <p> {this.state.articleDetail.created_at} </p>
                <p> {this.state.articleDetail.comments} </p>

            </div>
        )
    }
}
