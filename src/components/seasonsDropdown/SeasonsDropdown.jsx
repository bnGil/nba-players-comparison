import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

import { comparisonContext } from "../../context/comparisonContext";
import TEAMS_IMGS from "../../constants/teamsConvertion";
import "../playersDropdown/dropdown.css";

function SeasonsDropdown({ side }) {
  const { players, playerRight, setPlayerRight, playerLeft, setPlayerLeft } =
    useContext(comparisonContext);
  const player = side === "right" ? playerRight : playerLeft;
  const setPlayer = side === "right" ? setPlayerRight : setPlayerLeft;

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
    const seasons = [];
    data.forEach((season) => {
      if (season.team) {
        const seasonObj = {
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
          label: season.season,
          value: season.id,
        };
        seasons.push(seasonObj);
      }
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
      label: "Career Avg",
    };
    seasons.push(careerAvgSeason);
    return seasons;
  };

  useEffect(() => {
    if (Object.keys(player).length > 0 && !player.seasons) {
      setLoading(true);
      const url = `/.netlify/functions/fetchData?endpoint=/playerseasons?playerId=${player.id}`;
      const fetchDataFromNetlify = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(url);
          const seasons = getPlayerSeasonsArr(data);
          setPlayer({ ...player, seasons });
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDataFromNetlify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  const onChangeOption = (selectedSeason) => {
    setPlayer({ ...player, selectedSeason });
  };

  if (error) {
    return <p>{error}</p>;
  }

  const value = player?.selectedSeason ? player.selectedSeason : null;

  return (
    <Select
      options={player.seasons}
      placeholder={loading ? "Loading..." : "Select season..."}
      isDisabled={loading}
      onChange={onChangeOption}
      value={value}
      className="dropdown"
    />
  );
}

export default SeasonsDropdown;
