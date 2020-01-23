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
        console.log('the params',this.props.match);

        var baseURL = process.env.REACT_APP_API_URL + '/articles'

        
        return (         
            <div>
            {this.state.currentUser ? (
                <div>
                <h1> {this.state.currentUser.username} </h1>

                <div className="profile-page-buttons-two">
                <Link to={`/profile/settings`}><button>Settings</button></Link>
            <Link to={`/profile/create-article`}><button>Write new article</button></Link>
            </div>

                     <div>
                         {
                         this.state.currentUserArticles.map((obj) => {
                        return (
                            <Link to={`/articles/${obj._id}`}>

                            <div className="article-preview-profile"> 
                           
                            <div className='profile-pic-list'>
                            <img src={obj.image}></img>
                            </div>
                       
                            <div className='profile-pic-info' >
                            <p className='profile-articles-title'> {obj.title} </p>
                            <p className='profile-articles-description'> {obj.description} </p>
                            <p> #{obj.topic} </p>

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
