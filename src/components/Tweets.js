import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function Tweets() {
  const { data } = useQuery(["tweets"], () => {
    const options = {
      method: "GET",
      url: "https://twitter154.p.rapidapi.com/search/search",
      params: {
        query: "#liverpoolfc",
        section: "top",
        limit: "4",
        start_date: "2022-11-08",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "67ccd8545amsha37899d2c3bd460p19dba5jsna3a2c48fa156",
        "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
      },
    };

    return Axios.request(options).then((response) => response.data);
  });
  console.log(data?.results);

  return (
    <div className="container">
      <h2>Tweets:</h2>
      <Accordion>
        {data?.results.map((result, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <img
                  src={result.user.profile_pic_url}
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">{result.user.name}</strong>
                <small>{result.creation_date}</small>
              </Accordion.Header>
              <Accordion.Body>{result.text}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Tweets;
