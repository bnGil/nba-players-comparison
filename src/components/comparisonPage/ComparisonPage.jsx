import React, { useState, useEffect } from "react";
import axios from "axios";

import "./comparisonPage.css";
import PlayerPanel from "../playerPanel/PlayerPanel";
import RadarChart from "../radarChart/RadarChart";

function ComparisonPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromNetlify = async () => {
      const endPoint = "/players";
      const url = `/.netlify/functions/fetchData?endpoint=${endPoint}`;
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        console.log(data);
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
        {/* <PlayerPanel /> */}
        <RadarChart />
        {/* <PlayerPanel /> */}
      </div>
    </div>
  );
}

export default ComparisonPage;
