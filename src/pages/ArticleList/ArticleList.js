import { NavLink } from 'react-router-dom';
import articleService from "./../../lib/article-service";

import React, { Component } from 'react'

export default class ArticleList extends Component {
    state = {
        articleList: []

    }
componentDidMount( ) { 
    const { name }  = this.props.match.params
    console.log(this.props);
    
    
    articleService.articleByTopic( name ).then(res => { 

        console.log('article-list', res);


        this.setState( { articleList:res } )

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