import { useContext, useEffect, useState } from "react";

import Dropdown from "../dropdown/Dropdown";
import { comparisonContext } from "../../context/comparisonContext";

function PlayersDropdown({ side }) {
  const { players, playerRight, setPlayerRight, playerLeft, setPlayerLeft } =
    useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;
  const [selectedPlayer, setSelectedPlayer] = useState(
    Object.keys(player).length > 0 ? player : null
  );

  const fullNames = players.map((player) => {
    return {
      fullName: `${player.firstName} ${player.lastName}`,
      id: player.id,
      img: player.headShotUrl,
    };
  });

  useEffect(() => {
    if (selectedPlayer) {
      setPlayer(selectedPlayer);
    }
  }, [selectedPlayer, setPlayer]);

  return (
    <Dropdown
      options={fullNames}
      prompt="Select player..."
      id="id"
      label="fullName"
      onChange={(player) => setSelectedPlayer(player)}
      value={selectedPlayer}
    />
  );
}

export default PlayersDropdown;
