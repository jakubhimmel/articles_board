import React, { Component } from 'react'
import Topics from '../components/Topics/Topics'
import SearchBar from './SearchBar'


 class Homepage extends Component {
    render() {

        return (
            
            <div>

           <SearchBar/>
            <p>Topics</p>
            <Topics/>

            </div>
                 
              
            
                
          
        )
    }
}


export default Homepage;