import React from "react";

import "./comment.css";
import userAvatar from "../../assets/images/anonymous-user.png";

function Comment() {
  return (
    <div className="comment-container">
      <img className="comment-avatar" src={userAvatar} alt="Avatar" />
      <div className="comment-content">
        <h2 className="comment-author">Gil</h2>
        <h3 className="comment-date">Yesterday at 12:30AM</h3>
        <p className="comment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi dicta
          minus et sequi adipisci sint consequuntur eos fugit, saepe aspernatur
          fuga optio. Unde eum mollitia perferendis a? Vel, illum?
        </p>
      </div>
    </div>
  );
}

export default Comment;
