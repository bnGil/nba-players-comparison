import Dropdown from "../dropdown/Dropdown";
import animals from "../playerPanel/animals.json";

function SeasonsDropdown() {
  return (
    <Dropdown
      options={animals}
      prompt="Select animal..."
      id="id"
      label="name"
    />
  );
}

export default SeasonsDropdown;
