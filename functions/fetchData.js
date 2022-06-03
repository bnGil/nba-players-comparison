const axios = require("axios");

exports.handler = async function (event, context) {
  const { endpoint } = event.queryStringParameters;
  const API = axios.create({
    baseURL: "https://nba-player-individual-stats.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Host": "nba-player-individual-stats.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_NBA_KEY,
    },
  });
  try {
    const { data } = await API.get(endpoint); //example for endpoint is: "/players"
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
