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

if(monthInt == 12) {var newMonth = 'december'}



            return <Link to= {`/articles/${obj._id}`}>
            <div className='article-preview' key = { obj._id } >
              <div className='preview-pic'>
              <img className = "list-pic" src={obj.image} alt="article header"></img>
            </div>
            <div className='pic-info'>
                <h3> { obj.title } </h3> 
                <p> { obj.description } </p>
                <p>{day + " " + newMonth + " " +  obj.created_at.slice(0,4)}</p>
            </div>
            </div>
    </Link>
    
                    
        }
        )
    )
  }
        }
        
