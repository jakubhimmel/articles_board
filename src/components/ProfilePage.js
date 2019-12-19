import React, { Component } from 'react'
import authService from '../lib/auth-service';
import articleService from "./../lib/article-service";
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

class Profile extends Component {
    state = {
        currentUser:null,
        currentUserArticles:[],

    }  





    componentDidMount() {
        authService
            .getUser()
            .then((res)=> {
               this.setState( {currentUser:res,currentUserArticles:res.articles } );
                
            })
    }


    render() {    
        console.log(this.props);
        var baseURL = process.env.REACT_APP_API_URL + '/articles'

        
        return (
            
            <div>

                

                
           

            {this.state.currentUser ? (
                <div>
                <h1> {this.state.currentUser.username} </h1>

                <div className="profile-page-buttons">
                <Link to={`/profile/settings`}><button>Settings</button></Link>
            <Link to={`/profile/create-article`}><button>Write new article</button></Link>
            </div>

                     <div>
                         {
                         this.state.currentUserArticles.map((obj) => {
                        return (<Link to={`/articles/${obj._id}`}>
                            <div  className="article-preview">
                           
                            <div className='profile-preview-pic'>
                            <img className='' src={obj.image}></img>
                            </div>
                       
                            <div className='profile-preview-pic' >
                            <p> {obj.title} </p>
                            <p> {obj.description} </p>
                            <p> {obj.score} </p>
                            <p> {obj.topic} </p>
                            </div>


                                </div>
                                </Link>

                        )
                        } )
                        }
                    </div>
                

                        </div>
            ) : null
           
           
            }

            </div>
            
                
            
            )}
           
        }

export default withAuth(Profile);
