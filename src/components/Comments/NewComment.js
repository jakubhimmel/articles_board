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
          <input
          className="textarea"
            type="text"
            name="text"
            value={props.text}
            onChange={props.handleChange}
          />
          <input className = 'create-article-button' type="submit" value="Post"/>
        </form>
        </div>
</div>   }
</div>
    );
  
}

export default withAuth(NewComment);