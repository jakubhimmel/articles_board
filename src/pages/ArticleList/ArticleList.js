import { NavLink } from 'react-router-dom';
import articleService from "./../../lib/article-service";

import React, { Component } from 'react'

export default class ArticleList extends Component {
    state = {
        articleList: null

    }
componentDidMount( ) { 
    const { name } = this.props.match.params
    
    articleService.articleByTopic( name ).then(res => {
       console.log('article-list',res);
       
      })
    }
    
    render() {
        
        return (
            <div>
                        <p> {this.state.articleList} </p>
                    </div>
                )
                
                
            }
            
            
        }