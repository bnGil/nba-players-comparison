import React, { useState, useContext } from "react";

import "./playerPanel.css";
import { comparisonContext } from "../../context/comparisonContext";
import PopUp from "../popUp/PopUp";
import PlayersDropdown from "../playersDropdown/PlayersDropdown";
import SeasonsDropdown from "../seasonsDropdown/SeasonsDropdown";

function PlayerPanel() {
  const [isSearching, setIsSearching] = useState(false);
  const playerImgURL =
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png";

  return (
    <>
      <div className="player-container">
        <div
          className="player-img"
          style={{
            backgroundImage: `url(${playerImgURL})`,
          }}
        >
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
        >
          <div style={{ width: "200px", height: "120px" }}>
            <PlayersDropdown />
            <SeasonsDropdown />
          </div>
        </PopUp>
      )}
    </>
  );
}

export default PlayerPanel;
