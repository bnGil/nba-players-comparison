import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { comparisonContext } from "../../context/comparisonContext";
import useFetchNetlify from "../../hooks/useFetchNetlify";
import Dropdown from "../dropdown/Dropdown";
import TEAMS_IMGS from "../../constants/teamsConvertion";

function SeasonsDropdown({ side }) {
  const { players, playerRight, setPlayerRight, playerLeft, setPlayerLeft } =
    useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [seasons, setSeasons] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTeamImg = (teamName) => {
    for (const team in TEAMS_IMGS) {
      if (TEAMS_IMGS[team].name === teamName) {
        return TEAMS_IMGS[team].img;
      }
    }
  };

  const getPlayerSeasonsArr = (data) => {
    const seasons = data.map((season) => {
      return {
        id: season.id,
        season: season.season,
        team: season.team,
        teamImg: TEAMS_IMGS[season.team].img,
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
      teamImg: getTeamImg(tempPlayer.team),
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
      setLoading(true);
      const url = `/.netlify/functions/fetchData?endpoint=/playerseasons?playerId=${player.id}`;
      const fetchDataFromNetlify = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(url);
          const seasons = getPlayerSeasonsArr(data);
          setSeasons(seasons);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDataFromNetlify();
    }
  }, [player]);

  useEffect(() => {
    if (selectedSeason) {
      setPlayer({ ...player, selectedSeason });
    }
  }, [selectedSeason]);

  return (
    <Dropdown
      options={seasons}
      prompt={loading ? "Loading..." : "Select season..."}
      id="id"
      label="season"
      onChange={(season) => setSelectedSeason(season)}
      value={selectedSeason}
    />
  );
}

export default SeasonsDropdown;
