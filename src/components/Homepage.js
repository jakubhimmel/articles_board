import React, { Component } from 'react'
import Topics from '../components/Topics/Topics'
import SearchBar from './SearchBar'


 class Homepage extends Component {
    render() {

        return (
            
            <div className='homepage'>

                <h1>write.it</h1>

           <SearchBar/>
            <Topics/>

            </div>
                 
              
            
                
          
        )
    }
}


export default Homepage;