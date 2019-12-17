import React, { Component } from 'react'
import profilePageService from "./../lib/profilePage-service";
import Auth from '../lib/auth-service';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
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
    render() {
        return (
            
            <div>
                <Link to={`./profile/settings`}><button>Settings</button></Link>
                <Link to={`./profile/create-article`}><button>Write new article</button></Link>

            <h1> {this.state.currentUserName} </h1>
            <h1> {this.state.currentUserArticles} </h1>
            <h1> {this.state.currentUserComments} </h1>
            <h1> {this.state.currentUserFavorite} </h1>
            <h1> {this.state.currentUserFollowing} </h1>


            </div>
            
                
            
            )}
           
        }