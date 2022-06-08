import React, { useState } from "react";
import "./commentForm.css";

function CommentForm({ onHandleClick }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  return (
    <form className="commentForm-container">
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Name..."
      />
      <textarea
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Comment..."
      ></textarea>
      <input
        type="submit"
        className="btn"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          onHandleClick(author, text);
          setAuthor("");
          setText("");
        }}
      />
    </form>
  );
}

export default CommentForm;
