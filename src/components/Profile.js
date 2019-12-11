import React, { Component } from 'react'
import { withAuth } from '../lib/AuthProvider';

class Profile extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;

        return (
            <div>
                <h1>This is P R O F I L E</h1>
                {     
                isLoggedin ? <h1> Ur logged in</h1>
                            : <h1>Logged out</h1>
            }
                
                
            </div>
        )
    }
}


export default withAuth(Profile);