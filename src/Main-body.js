// import { useState } from "react";
// import poster from "./assets/img/tlotr.jpg"
import MovieList from "./Movie-list";

export default function MainBody() {
  return (
    <>
    <div class="main">
      <div class="movie-select">
        <span>Selecione o filme</span>
      </div>
      <div class="movies">
        <MovieList />
      </div>
    </div>
    </>
  );
}