import React, { Component } from 'react'
import Topics from '../components/Topics/Topics'


 class Homepage extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;

        return (
            <div>
            <p>Search bar:</p>
            <p>Topics</p>
            <Topics/>
                 
              
            
                
            </div>
        )
    }
}


export default Homepage;