import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "../ContenedorListado/MovieList";

export const FoundMovies = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=7271771e6043ab63ad877def2bc41391&language=es-ES&query=${searchParams.get(
          "keyword"
        )}`
      )
      .then((res) => {
        setMoviesResults(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

  return (
    <main className="contenedor contenedor-listado">
      <h3>Buscaste: {keyword}</h3>
      <Grid container spacing={4}>
        <MovieList movies={moviesResults} />
      </Grid>
    </main>
  );
};
