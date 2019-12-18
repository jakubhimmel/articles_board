import React from "react";

export default function CommentsList(props) {
  return (
    <div>
      {props.comments
        ? props.comments.map(obj => {
            return <p>{obj.text}</p>;
          })
        : null}
    </div>
  );
}
