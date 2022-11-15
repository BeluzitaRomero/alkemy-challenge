import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const MovieItem = ({ movie }) => {
  return (
    <Grid item xs={6} sm={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="500"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className="movie-title"
          >
            {movie.original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview.substring(0, 60)}...
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Estreno: {movie.release_date}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root"
            to={`/detail/${movie.id}`}
            size="small"
          >
            Ver detalles
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
