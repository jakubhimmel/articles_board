import React from "react";

const NewComment = (props) => {
    return (
      <div className='comment-section'>
        <p>Comments:</p>
        <form onSubmit={props.handleFormSubmit}>
          <input
          className="texarea"
          placeholder="Respond "
            type="text"
            name="text"
            value={props.text}
            onChange={props.handleChange}
          />

          <input type="submit" value="Post" />
        </form>
      </div>
    );
  
}

export default NewComment;