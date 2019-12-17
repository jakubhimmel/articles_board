import React, { Component } from 'react'
import Auth from '../lib/auth-service';


export default class ProfilePageSettings extends Component {
    state = {
        currentUserName:'',
        currentUserArticles:'',
        currentUserComments:'',
        currentUserFavorite:'',
        currentUserFollowing:''
    }  

    componentDidMount() {
        Auth.me()
        .then((result) => {
            const currentUserName = result.username
            const currentUserArticles= result.articles
            const currentUserComments = result.comments
            const currentUserFavorite= result.favorite
            const currentUserFollowing = result.following
            
            this.setState({ currentUserName:currentUserName });
            this.setState({ currentUserArticles:currentUserArticles });
            this.setState({ currentUserComments:currentUserComments });
            this.setState({ currentUserFavorite:currentUserFavorite });
            this.setState({ currentUserFollowing:currentUserFollowing });
 

        }).catch((err) => {
            
        });
    }
    render() 
    {

        return (
           <div>
               <h1>Settings page </h1>
        
            </div>
        )
    }
}
