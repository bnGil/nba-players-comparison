import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { comparisonContext } from "../../context/comparisonContext";
import useFetchNetlify from "../../hooks/useFetchNetlify";
import Dropdown from "../dropdown/Dropdown";

function SeasonsDropdown({ side }) {
  const { players, playerRight, setPlayerRight, playerLeft, setPlayerLeft } =
    useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const getTeamImg = (teamName) => {
  //   const team = teams.find((team) => team.name === teamName);
  //   return team.teamLogoUrl;
  // };

  const getPlayerSeasonsArr = (data) => {
    const seasons = data.map((season) => {
      return {
        id: season.id,
        season: season.season,
        team: season.team,
        // teamImg:getTeamImg(TEAMS_CONVERTION[season.team])
        pointsPerGame: season.pointsPerGame,
        blocksPerGame: season.blocksPerGame,
        assistsPerGame: season.assistsPerGame,
        reboundsPerGame: season.reboundsPerGame,
        turnoversPerGame: season.turnoversPerGame,
        percentageThree: season.percentageThree,
        percentageFieldGoal: season.percentageFieldGoal,
      };
    });
    const tempPlayer = players.find(
      (currTempPlayer) => currTempPlayer.id === player.id
    );
    const careerAvgSeason = {
      id: 30000,
      season: "Career Avg",
      // teamImg: getTeamImg(tempPlayer.team),
      pointsPerGame: tempPlayer.careerPoints,
      blocksPerGame: tempPlayer.careerBlocks,
      assistsPerGame: tempPlayer.careerAssists,
      reboundsPerGame: tempPlayer.careerRebounds,
      turnoversPerGame: tempPlayer.careerTurnovers,
      percentageThree: tempPlayer.careerPercentageThree,
      percentageFieldGoal: tempPlayer.careerPercentageFieldGoal,
    };
    seasons.push(careerAvgSeason);
    return seasons;
  };

  useEffect(() => {
    if (player && player.id) {
      const url = `/.netlify/functions/fetchData?endpoint=/playerseasons?playerId=${player.id}`;
      const fetchDataFromNetlify = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(url);
          console.log(data);
          const seasons = getPlayerSeasonsArr(data);
          setPlayer({ ...player, seasons, selectedSeason });
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDataFromNetlify();
    }
  }, [selectedSeason]);

  // useEffect(() => {
  //   setPlayer({ ...player, selectedSeason });
  // }, [selectedSeason]);

  return (
    <Dropdown
      options={player.seasons}
      prompt="Select season..."
      id="id"
      label="season"
      onChange={(season) => setSelectedSeason(season)}
      value={selectedSeason}
    />
  );
}

export default SeasonsDropdown;
