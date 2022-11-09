import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function Title() {
  const { data } = useQuery(["liverpool"], () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
      params: { league: "39", season: "2022", team: "40" },
      headers: {
        "X-RapidAPI-Key": "67ccd8545amsha37899d2c3bd460p19dba5jsna3a2c48fa156",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    return Axios.request(options).then(function (response) {
      return response.data;
    });
  });
  console.log(data?.response);

  const formattedForm = data?.response.form.split("");

  return (
    <div className="container text-center">
      <h1>Welcome to your Liverpool FC dashboard!</h1>
      <img src={data?.response.team.logo} alt="logo" />
      <h3>
        {data?.response.league.name} Season: {data?.response.league.season}
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Season's Form:{" "}
        {formattedForm?.map((letter, index) => {
          if (letter === "W") {
            return (
              <div
                key={index}
                style={{
                  background: "green",
                  width: "20px",
                  marginLeft: "3px",
                  borderRadius: "3px",
                  color: "white",
                }}
              >
                {letter}
              </div>
            );
          } else if (letter === "D") {
            return (
              <div
                key={index}
                style={{
                  background: "grey",
                  width: "20px",
                  marginLeft: "3px",
                  borderRadius: "3px",
                  color: "white",
                }}
              >
                {letter}
              </div>
            );
          } else
            return (
              <div
                key={index}
                style={{
                  background: "red",
                  width: "20px",
                  marginLeft: "3px",
                  borderRadius: "3px",
                  color: "white",
                }}
              >
                {letter}
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Title;
