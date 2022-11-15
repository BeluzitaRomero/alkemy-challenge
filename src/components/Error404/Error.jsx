import { Grid } from "@mui/material";
import React from "react";
import "./Error.css";

export const Error = () => {
  return (
    <Grid container direction={"row"} justifyContent={"center"}>
      <div className="error-img">
        {/* <img src="https://i.postimg.cc/V6qvg4xq/2145204.jpg" alt="" /> */}
        <img
          src={"https://i.postimg.cc/J7D3jB4P/248989-P42-VE0-381.jpg"}
          alt=""
        />
      </div>
    </Grid>
  );
};
