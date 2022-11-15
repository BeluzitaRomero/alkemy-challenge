// import React, { useRef } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

//forma declarativa de navegar
import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        movies.map((movie, ind) => <MovieItem key={ind} movie={movie} />)
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
};
