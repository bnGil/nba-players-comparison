import { useContext, useEffect, useState } from "react";

import Dropdown from "../dropdown/Dropdown";
import { comparisonContext } from "../../context/comparisonContext";

function PlayersDropdown({ side }) {
  const { players, setPlayerRight, setPlayerLeft } =
    useContext(comparisonContext);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;

  const fullNames = players.map((player) => {
    return {
      fullName: `${player.firstName} ${player.lastName}`,
      id: player.id,
      img: player.headShotUrl,
    };
  });

  useEffect(() => {
    setPlayer(selectedPlayer);
  }, [selectedPlayer]);

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
