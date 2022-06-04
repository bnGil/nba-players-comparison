import React, { useState } from "react";

import "./playerPanel.css";
import PopUp from "../popUp/PopUp";

function PlayerPanel() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className="player-container">
        <div className="player-img">
          <i
            className="fa-solid fa-user-plus fa-2x"
            onClick={() => setIsSearching((prev) => !prev)}
          ></i>
          <img
            className="team-img"
            src="https://a.espncdn.com/i/teamlogos/nba/500/mil.png"
            alt="team"
          />
        </div>
        <h2 className="player-name">G. Antetokounmpo</h2>
        <h3 className="player-season">2017-18</h3>
      </div>

      {isSearching && (
        <PopUp
          text="Choose a player and a season:"
          noCallback={() => setIsSearching((prev) => !prev)}
        />
      )}
    </>
  );
}

export default PlayerPanel;
