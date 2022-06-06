import React, { useEffect, useContext } from "react";

import "./comparisonPage.css";
import { comparisonContext } from "../../context/comparisonContext";
import useFetchNetlify from "../../hooks/useFetchNetlify";
import RadarChart from "../radarChart/RadarChart";
import PlayerPanel from "../playerPanel/PlayerPanel";

function ComparisonPage() {
  const { setPlayers } = useContext(comparisonContext);
  const { data, error, loading } = useFetchNetlify("/players");

  useEffect(() => {
    const existingPlayers = [];
    data.forEach((player) => {
      if (player.firstName && player.lastName && player.team) {
        existingPlayers.push(player);
      }
    });
    setPlayers(existingPlayers);
  }, [data]);

  if (loading) {
    return (
      <div className="comparisonPage">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="comparisonPage">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <div className="comparisonPage">
      <div className="grid">
        <div className="player-left">
          <PlayerPanel side="left" />
        </div>
        <div className="chart">
          <RadarChart />
        </div>
        <div className="player-right">
          <PlayerPanel side="right" />
        </div>
      </div>
    </div>
  );
}

export default ComparisonPage;
