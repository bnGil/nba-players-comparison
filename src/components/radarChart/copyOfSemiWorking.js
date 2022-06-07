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
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const dataLeft = [
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.pointsPerGame,
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.blocksPerGame,
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.assistsPerGame,
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.reboundsPerGame,
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.percentageThree,
    playerLeft &&
      playerLeft.selectedSeason &&
      playerLeft.selectedSeason.percentageFieldGoal,
  ];
  const dataRight = [
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.pointsPerGame,
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.blocksPerGame,
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.assistsPerGame,
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.reboundsPerGame,
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.percentageThree,
    playerRight &&
      playerRight.selectedSeason &&
      playerRight.selectedSeason.percentageFieldGoal,
  ];

  const data = {
    labels: [
      "Points Per Game",
      "Blocks Per Game",
      "Assists Per Game",
      "Rebounds Per Game",
      "Three Point %",
      "Field Goal %",
    ],
    datasets: [
      {
        // label: "",
        label: playerLeft?.length > 0 ? playerLeft.fullName : "",
        // data: [],
        data: playerLeft?.length > 2 ? dataLeft : [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        // label: "",
        label: playerRight?.length > 0 ? playerRight.fullName : "",
        // data: [],
        data: playerRight?.length > 2 ? dataRight : [],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;

// const dataLeft = [
//   playerLeft?.selectedSeason?.pointsPerGame,
//   playerLeft?.selectedSeason?.blocksPerGame,
//   playerLeft?.selectedSeason?.assistsPerGame,
//   playerLeft?.selectedSeason?.reboundsPerGame,
//   playerLeft?.selectedSeason?.percentageThree,
//   playerLeft?.selectedSeason?.percentageFieldGoal,
// ];
// const dataRight = [
//   playerRight?.selectedSeason?.pointsPerGame,
//   playerRight?.selectedSeason?.blocksPerGame,
//   playerRight?.selectedSeason?.assistsPerGame,
//   playerRight?.selectedSeason?.reboundsPerGame,
//   playerRight?.selectedSeason?.percentageThree,
//   playerRight?.selectedSeason?.percentageFieldGoal,
// ];
