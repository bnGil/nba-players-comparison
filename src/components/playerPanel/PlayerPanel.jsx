import React, { useState } from "react";
import "./playerPanel.css";

function PlayerPanel() {
  return (
    <div className="player-container">
      <div className="player-img">
        <i className="fa-solid fa-user-plus fa-2x"></i>
        <img
          className="team-img"
          src="https://a.espncdn.com/i/teamlogos/nba/500/mil.png"
          alt="team"
        />
      </div>
      <h2>G. Antetokounmpo</h2>
      <h3>2017-18</h3>
    </div>
  );
}

export default PlayerPanel;
