import Dropdown from "../dropdown/Dropdown";
import animals from "../playerPanel/animals.json";
import { comparisonContext } from "../../context/comparisonContext";
import { useContext } from "react";

function PlayersDropdown() {
  const { players } = useContext(comparisonContext);
  const fullNames = players.map((player) => {
    return {
      fullName: `${player.firstName} ${player.lastName}`,
      id: player.id,
    };
  });
  return (
    <Dropdown
      options={fullNames}
      prompt="Select player..."
      id="id"
      label="fullName"
    />
  );
}

export default PlayersDropdown;
