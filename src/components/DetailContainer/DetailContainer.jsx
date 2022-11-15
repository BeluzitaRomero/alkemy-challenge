import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const DetailContainer = () => {
  const [movieDetail, setMovieDetail] = useState();
  console.log(movieDetail);
  const { id } = useParams();

  let token = sessionStorage.getItem("token");

  useEffect(() => {
    let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=7271771e6043ab63ad877def2bc41391&language=en-US`;
    axios
      .get(URL)
      .then((res) => setMovieDetail(res.data))
      .catch((error) => MySwal.fire("Hubo un error al cargar el detalle"));
  }, [id]);

  return (
    <>
      {token === null && <Navigate to="/" />}

      {movieDetail ? (
        <section className="contenedor">
          <ItemDetail detail={movieDetail} />
        </section>
      ) : (
        <h3>Cargando detalles...</h3>
      )}
    </>
  );
};
