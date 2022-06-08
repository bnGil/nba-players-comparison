import React from "react";

import "./comment.css";
import userAvatar from "../../assets/images/anonymous-user.png";

function Comment({ author, date, text }) {
  return (
    <div className="comment-container">
      <img className="comment-avatar" src={userAvatar} alt="Avatar" />
      <div className="comment-content">
        <h2 className="comment-author">{author}</h2>
        <h3 className="comment-date">{date}</h3>
        <p className="comment-text">{text}</p>
      </div>
    </div>
  );
}

export default Comment;
