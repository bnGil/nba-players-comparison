import { createContext, useState } from "react";

export const comparisonContext = createContext();

function ComparisonProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [playerRight, setPlayerRight] = useState({});
  const [playerLeft, setPlayerLeft] = useState({});

  return (
    <comparisonContext.Provider
      value={{
        players,
        setPlayers,
        playerRight,
        setPlayerRight,
        playerLeft,
        setPlayerLeft,
      }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export default ComparisonProvider;
