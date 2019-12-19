import React, { Component } from 'react'
import Auth from '../lib/auth-service';
import articleService from "./../lib/article-service";
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';

class Profile extends Component {
    state = {
        currentUserName:'',
        currentUserArticles:'',

    }  





    // componentDidMount() {
    //         Auth.getUser().then((res)=> {
    //             console.log(res);
                
    //         })
    // }


    render() {    
        console.log(this.props);
        var baseURL = process.env.REACT_APP_API_URL + '/articles'

        
        return (
            
            <div>

                

                
            <Link to={`./profile/settings`}><button>Settings</button></Link>
            <Link to={`./profile/create-article`}><button>Write new article</button></Link>

            {this.props.user ? (
                <div>
                <h1> {this.props.user.username} </h1>

                     <div>
                         {
                         this.props.user.articles.map((obj) => {
                        return (
                            <div  className="user-articles-list">
                            <p> {obj.title} </p>
                            <p> {obj.description} </p>
                            <p> {obj.score} </p>
                            <p> {obj.topic} </p>

                            <img className='' src={obj.image}></img>

                            <Link to={`/articles/${obj._id}`}>See article</Link>
                                </div>
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
