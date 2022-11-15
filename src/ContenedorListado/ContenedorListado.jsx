import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

//componentes
import { MovieList } from "./MovieList";
import "./ContenedorListado.css";

//mui
import { Grid } from "@mui/material";

//sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const ContenedorListado = () => {
  const [movies, setMovies] = useState([]);
  // const navigate = useRef(useNavigate());
  // console.log(navigate);

  let token = sessionStorage.getItem("token");

  useEffect(() => {
    const API =
      "https://api.themoviedb.org/3/discover/movie?api_key=7271771e6043ab63ad877def2bc41391&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => MySwal.fire("Hubo un error, intenta mas tarde..."));
  }, []);

  return (
    <>
      {token === null ? (
        <Navigate to="/" />
      ) : (
        <main className="contenedor contenedor-listado">
          <h1 className="title">Peliculas estreno</h1>
          <Grid container spacing={4} marginY={6}>
            <MovieList movies={movies} />
          </Grid>
        </main>
      )}
    </>
  );
};
