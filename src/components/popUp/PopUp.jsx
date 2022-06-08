import React from "react";
import "./popUp.css";

function PopUp({ text, children, yesCallback, noCallback }) {
  return (
    <div className="popup-container">
      <div className="popup-card">
        <h3>{text}</h3>
        {children}
        <div className="btns-container">
          <button className="popup-btn" onClick={yesCallback}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
