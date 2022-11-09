import { useQuery } from "@tanstack/react-query";
import React from "react";
import Axios from "axios";

function Rank() {
  const { data } = useQuery(["stats"], () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: "39", team: "40" },
      headers: {
        "X-RapidAPI-Key": "67ccd8545amsha37899d2c3bd460p19dba5jsna3a2c48fa156",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    return Axios.request(options).then(function (response) {
      return response.data;
    });
  });
  console.log(data);
  return (
    <div className="container text-center">
      <h3>Current rank: {data?.response[0].league.standings[0][0].rank}</h3>
      <h3>Points: {data?.response[0].league.standings[0][0].points}</h3>
    </div>
  );
}

export default Rank;
