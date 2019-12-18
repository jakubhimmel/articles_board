import React from "react";

const NewComment = (props) => {
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={props.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.handleChange}
          />

          <label>Text:</label>
          <input
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