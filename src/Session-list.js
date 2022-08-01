import { useState, useEffect } from "react";
import axios from "axios";
import Session from "./Session";

export default function SessionList() {
  const [getSessions, setGetSessions] = useState([]);
  useEffect(() => {
    let id = 1
    const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`);
    
    request.then((resposta) => {
      console.log(resposta.data.days);
      setGetSessions(resposta.data.days);
    });
  }, []);

  return (
    <>
      {getSessions.map((item) => (
        <Session
          id={item.id}
          weekday={item.weekday}
          date={item.date}
        />
      ))}
    </>
  );
}
