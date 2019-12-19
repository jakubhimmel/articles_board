import React from "react";

const NewComment = (props) => {

    return (

      


      <div className='comment-section'>
        <p>Comments:</p>
        <form onSubmit={props.handleFormSubmit}>
          <textarea
          rows='10'
          className="textarea"
            type="text"
            name="text"
            value={props.text}
            onChange={props.handleChange}
          />
          <input className = 'create-article-button' type="submit" value="Post"/>
        </form>
      </div>
    );
  
}

export default NewComment;