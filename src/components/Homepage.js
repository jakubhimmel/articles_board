import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';


 class Homepage extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;

        return (
            <div>
            <h1>This is a H O M E  P A G E</h1>
            {     
                isLoggedin ? <h1> Ur logged in</h1>
                            : <h1>Logged out</h1>
            }
                
            </div>
        )
    }
}


export default withAuth(Homepage);