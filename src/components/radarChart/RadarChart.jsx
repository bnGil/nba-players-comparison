import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import { comparisonContext } from "../../context/comparisonContext";
import "./radarChart.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = ["PPG", "BPG", "APG", "RPG", "3P%", "FG%"];

const shortenFullName = (fullName) => {
  const arrOfStr = fullName.split(" ");
  arrOfStr[0] = arrOfStr[0][0] + ".";
  return arrOfStr.join(" ");
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
    min: 0,
  },
  scales: {
    r: {
      grid: {
        color: "#3c3c3c",
      },
    },
  },
};

function RadarChart() {
  const { playerRight, playerLeft } = useContext(comparisonContext);
  const [chartData, setChartData] = useState({ labels, datasets: [] });

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: playerLeft?.fullName
            ? shortenFullName(playerLeft.fullName)
            : "",
          data: playerLeft?.selectedSeason
            ? [
                playerLeft.selectedSeason.pointsPerGame,
                playerLeft.selectedSeason.blocksPerGame,
                playerLeft.selectedSeason.assistsPerGame,
                playerLeft.selectedSeason.reboundsPerGame,
                playerLeft.selectedSeason.percentageThree,
                playerLeft.selectedSeason.percentageFieldGoal,
              ]
            : [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: playerRight?.fullName
            ? shortenFullName(playerRight.fullName)
            : "",
          data: playerRight?.selectedSeason
            ? [
                playerRight.selectedSeason.pointsPerGame,
                playerRight.selectedSeason.blocksPerGame,
                playerRight.selectedSeason.assistsPerGame,
                playerRight.selectedSeason.reboundsPerGame,
                playerRight.selectedSeason.percentageThree,
                playerRight.selectedSeason.percentageFieldGoal,
              ]
            : [],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
      ],
    });
  }, [playerLeft, playerRight]);

  return (
    <div className="chart-container">
      <Radar data={chartData} options={options} />
    </div>
  );
}

export default RadarChart;
