import React, { useState, useContext, useEffect } from "react";

import "./playerPanel.css";
import { comparisonContext } from "../../context/comparisonContext";
import PopUp from "../popUp/PopUp";
import PlayersDropdown from "../playersDropdown/PlayersDropdown";
import SeasonsDropdown from "../seasonsDropdown/SeasonsDropdown";

function PlayerPanel({ side }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const { playerRight, playerLeft } = useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;

  return (
    <>
      <div className="player-container">
        <div
          className="player-img"
          style={{
            backgroundImage: `url(${player && player.img})`,
          }}
        >
          <i
            className="fa-solid fa-user-plus fa-2x"
            onClick={() => setIsPopupOpened((prev) => !prev)}
          ></i>
          <img
            className="team-img"
            src="https://a.espncdn.com/i/teamlogos/nba/500/mil.png"
            alt="team"
          />
        </div>
        <h2 className="player-name">{player && player.fullName}</h2>
        <h3 className="player-season">
          {player && player.selectedSeason && player.selectedSeason.season}
        </h3>
      </div>

      {isPopupOpened && (
        <PopUp
          text="Choose a player and a season:"
          yesCallback={() => setIsPopupOpened((prev) => !prev)}
        >
          <div style={{ width: "200px", height: "120px" }}>
            <PlayersDropdown side={side} />
            {player && <SeasonsDropdown side={side} />}
          </div>
        </PopUp>
      )}
    </>
  );
}

export default PlayerPanel;
