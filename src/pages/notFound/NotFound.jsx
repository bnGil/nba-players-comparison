import React from "react";
import { useHistory } from "react-router-dom";

import "./notFound.css";

function NotFound() {
  const history = useHistory();
  return (
    <div className="notfound-container">
      <h1 className="notfound-header">404 - Not Found!</h1>
      <button className="btn" onClick={history.goBack}>
        Back
      </button>
    </div>
  );
}

export default NotFound;
