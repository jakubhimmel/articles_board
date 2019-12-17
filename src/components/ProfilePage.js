import React, { Component } from 'react'
import profilePageService from "./../lib/profilePage-service";
import { withAuth } from '../lib/AuthProvider';
import Auth from '../lib/auth-service';
import { Link } from 'react-router-dom';

class Profile extends Component {
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
        const { user, logout, isLoggedin } = this.props;

        return (
            
            <div>
            
            {
            isLoggedin 
            ? (<div>
                <Link to={`./profile/settings`}><button>Settings</button></Link>
            <h1> {this.state.currentUserName} </h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>

            </div>
            ) : (<div>
            <h1>U cannot ascces this page</h1>
            </div>)
                
                
            
            }
            </div>
        )
    }
}


export default withAuth(Profile);
