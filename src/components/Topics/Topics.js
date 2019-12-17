import React from 'react';
// import "./Topics.css";
import { Link } from 'react-router-dom';



export default function Topics() {
  const topics = [
    "future",
    "politics",
    "technology",
    "health",
    "zero-waste",
    "culture",
    "food",
    "design"
  ];

  return (
    <div>
      {topics.map(element => {
        return (
          <button key= {element} >
          <Link className="topics-button" to={`/articles/topics/${element}`}>{element}</Link>

          </button>
        );
      })}
    </div>
  );
}
