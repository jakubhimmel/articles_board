import React, { Component } from "react";
import articleService from "./../../lib/article-service";
import { Link } from 'react-router-dom';



export default class ArticleList extends Component {
  state = {
    articleList: []
  };
  componentDidMount() {
    const { name } = this.props.match.params;
    // console.log(this.props);


    articleService.articleByTopic(name).then(res => {
      console.log("article-list", res)

      this.setState({ articleList: res.articles });
    });
  }

  render() {

      
      
    return <div>
        {

        this.state.articleList.map( (obj) => {console.log(obj);

            return <div key = { obj._id } >
                <Link to= {`/articles/${obj._id}`}><h3> { obj.title } </h3> </Link>
                <p> { obj.description } </p>

                    </div>
        }
        )
        }
    </div>
    
        
      
  
}}
