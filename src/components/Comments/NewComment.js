import React from "react";
import { withAuth } from './../../lib/AuthProvider'


const NewComment = (props) => {

  const { user, logout, isLoggedin } = props;
return (

  <div>    
    {
      !isLoggedin 
        ? null
        :
      <div>
      <div className='comment-section'>
        <p>Comments:</p>
        <form onSubmit={props.handleFormSubmit}>
          <textarea             
            value={props.text} 
            name='text'           
            onChange={props.handleChange}
            cols={40} rows={10}
            />
            
          <input className = 'create-article-button' type="submit" value="Post"/>
        </form>
        </div>
</div>   }
</div>
    );
  
}

export default withAuth(NewComment);