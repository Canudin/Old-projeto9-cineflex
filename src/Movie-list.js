import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function MovieList() {
  const [getMovies, setGetMovies] = useState([]);
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
    console.log(request)
    
    request.then((resposta) => {
      console.log(resposta.data)
      setGetMovies(resposta.data);
    });
  }, []);

  return (
    <>
      {getMovies.map((item) => (
        <Movie
          id={item.id}
          title={item.title}
          posterURL={item.posterURL}
          overview={item.overview}
          releaseDate={item.releaseDate}
        />
      ))}
    </>
  );
}
