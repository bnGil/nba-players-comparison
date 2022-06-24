import { useContext } from "react";
import Select from "react-select";

import { comparisonContext } from "../../context/comparisonContext";

function PlayersDropdown({ side }) {
  const { players, playerRight, setPlayerRight, playerLeft, setPlayerLeft } =
    useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;

  const onChangeOption = (selectedPlayer) => {
    setPlayer(selectedPlayer);
  };

  const playersOptions = players.map((player) => ({
    label: `${player.firstName} ${player.lastName}`,
    value: player.id,
    id: player.id,
    img: player.headShotUrl,
    fullName: `${player.firstName} ${player.lastName}`,
  }));

  const value = Object.keys(player).length > 0 ? player : null;

  return (
    <Select
      options={playersOptions}
      onChange={onChangeOption}
      placeholder="Select player..."
      value={value}
    />
  );
}

export default PlayersDropdown;
