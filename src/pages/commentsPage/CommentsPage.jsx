import React, { useState, useEffect } from "react";
import { setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import "./commentsPage.css";
import Comment from "../../components/comment/Comment";
import CommentForm from "../../components/commentForm/CommentForm";
import { db } from "../../services/firebase-config";
import Spinner from "../../components/spinner/Spinner";

function CommentsPage(props) {
  const [playerComments, setPlayerComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const playerId = props.match.params.id;
  const playerName = props.match.params.name;

  const createComment = async (author, text) => {
    const newComment = {
      commentId: uuidv4(),
      author,
      text,
      date: new Date().toLocaleString(),
    };
    const playerDoc = doc(db, "comments", playerId);
    const newField = { comments: [...playerComments, newComment] };
    await updateDoc(playerDoc, newField);
    setPlayerComments([...playerComments, newComment]);
  };

  const paintComments = () => {
    return playerComments.map(({ commentId, author, text, date }) => {
      return (
        <Comment key={commentId} author={author} date={date} text={text} />
      );
    });
  };

  useEffect(() => {
    setLoading(true);
    const getComments = async () => {
      try {
        const playerCommentsRef = doc(db, "comments", playerId);
        const playerCommentsData = await getDoc(playerCommentsRef);
        if (playerCommentsData.exists()) {
          setPlayerComments(playerCommentsData.data().comments);
        } else {
          await setDoc(doc(db, "comments", playerId), { comments: [] });
          const newPlayerCommentsRef = doc(db, "comments", playerId);
          const newPlayerCommentsData = await getDoc(newPlayerCommentsRef);
          setPlayerComments(newPlayerCommentsData.data().comments);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [playerId]);

  if (loading) {
    return (
      <div className="comparisonPage">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="commentsPage">
      <h1 className="commentsPage-h1">{playerName}</h1>
      {playerComments.length === 0 ? (
        <h2>Be the first to comment!</h2>
      ) : (
        paintComments()
      )}
      <p>Leave your comment below and please be nice</p>
      <CommentForm onHandleClick={createComment} />
      <button className="btn" onClick={props.history.goBack}>
        Back
      </button>
    </div>
  );
}

export default CommentsPage;
