import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./comparisonPage.css";
import { comparisonContext } from "../../context/comparisonContext";
import RadarChart from "../radarChart/RadarChart";
import PlayerPanel from "../playerPanel/PlayerPanel";

function ComparisonPage() {
  const { setPlayers } = useContext(comparisonContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromNetlify = async () => {
      const endPoint = "/players";
      const url = `/.netlify/functions/fetchData?endpoint=${endPoint}`;
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        const players = [];
        data.forEach((player) => {
          if (player.firstName && player.lastName && player.team) {
            players.push(player);
          }
        });
        setPlayers(players);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromNetlify();
  }, []);

  if (loading) {
    return (
      <div className="comparisonPage">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="comparisonPage">
      <div className="grid">
        <div className="player-left">
          <PlayerPanel />
        </div>
        <div className="chart">
          <RadarChart />
        </div>
        <div className="player-right">
          <PlayerPanel />
        </div>
      </div>
    </div>
  );
}

export default ComparisonPage;
