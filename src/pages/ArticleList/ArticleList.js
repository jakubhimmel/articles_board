import React, { Component } from "react";
import './../../../src/App.css';
import articleService from "./../../lib/article-service";
import { Link } from 'react-router-dom';



export default class ArticleList extends Component {
  state = {
    articleList: []
  };
  
  componentDidMount() {
    const { name,topic } = this.props.match.params;

    console.log('article list',this.props);

if (topic) {
    articleService.articleByTopic(topic).then(res => {
      console.log("article-list", res)

      this.setState({ articleList: res.articles });
    })
    
  }else if (name) {
      articleService.articleByName(name).then(res => {
        console.log("article-list", res)
  
        this.setState({ articleList: res });
      })
    }

  
  }

  render() {


      
    return (
        

        this.state.articleList.map( (obj) => {console.log(obj);
         const day = obj.created_at.slice(8,10)
        var monthInt = obj.created_at.slice(5,7)

if(monthInt == 1) {var newMonth = 'january'}
if(monthInt == 2) {var newMonth = 'february'}
if(monthInt == 3) {var newMonth = 'march'}
if(monthInt == 4) {var newMonth = 'april'}
if(monthInt == 5) {var newMonth = 'may'}
if(monthInt == 6) {var newMonth = 'june'}
if(monthInt == 7) {var newMonth = 'july'}
if(monthInt == 8) {var newMonth = 'august'}
if(monthInt == 9) {var newMonth = 'september'}
if(monthInt == 10) {var newMonth = 'october'}
if(monthInt == 11) {var newMonth = 'november'}
if(monthInt == 12) {var newMonth = 'december'}





            return <Link to= {`/articles/${obj._id}`}>
            <div className='article-preview' key = { obj._id } >
              <div className='preview-pic-list'>
              <img className = "list-pic" src={obj.image} alt="article header"></img>
            </div>
            <div className='pic-info'>
                <p className='pic-info-tag'> { obj.title } </p> 
                <p className='pic-info-tag'> { obj.description } </p>
                <p className='pic-info-tag'>{day + " " + newMonth + " " +  obj.created_at.slice(0,4)}</p>
            </div>
            </div>
    </Link>
    
                    
        }
        )
    )
  }
        }
        
