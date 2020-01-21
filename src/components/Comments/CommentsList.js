import React from "react";

export default function CommentsList(props) {



  return (
    

    <div>
      {props.comments
        ? props.comments.map(obj => {

          {/* var day = (obj.created_at).slice(8,10);
          var month = (obj.created_at).slice(5,7);

          var year = (obj.created_at).slice(0,4);

          if (month == 12) {var monthString = 'december'} */}
          

console.log('response ',obj);

          return (<div className='comments'>
         
            <p className='title'>{obj.ownerName}</p>
            <p className='comment-text'>{obj.text}</p>
            {/* <p>{day + " " + monthString + " " +  year}</p> */}

          </div> )
          
          })
        : null}
    </div>
  )
}
