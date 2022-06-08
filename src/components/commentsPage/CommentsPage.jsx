import React from "react";

import "./commentsPage.css";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";

function CommentsPage(props) {
  // const { players } = useContext(comparisonContext);
  const playerId = props.match.params.id;
  console.log(playerId);

  // const getPlayerName = (id) => {
  //   const player = players.find((player) => player.id === id);
  //   return `${player.firstName} ${player.lastName}`;
  // };

  return (
    <div className="commentsPage">
      <h1 className="commentsPage-h1">Trae Young</h1>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <p>Leave your comment below and please be nice</p>
      <CommentForm />
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
}

export default CommentsPage;
