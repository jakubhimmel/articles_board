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

      
      
    return <div>
        {

        this.state.articleList.map( (obj) => {console.log(obj);

            return <div key = { obj._id } >
                <Link to= {`/articles/${obj._id}`}><h3> { obj.title } </h3> </Link>
                <img className = "list-pic" src={obj.image} alt="article header"></img>
                <p> { obj.description } </p>

                    </div>
        }
        )
        }
    </div>
    
        
      
  
}}
