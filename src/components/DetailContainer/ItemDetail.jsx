import { Grid } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  return (
    <Grid
      container
      spacing={2}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={2}
    >
      <Grid item lg={4}>
        <picture>
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.id}
          />
        </picture>
      </Grid>
      <Grid item lg={4}>
        <article className="card-detail">
          <h2>EN CONSTRUCCION</h2>
          <div>
            <h1>{detail.title}</h1>
            <p>{detail.overview}</p>
          </div>
        </article>
      </Grid>
    </Grid>
  );
};
