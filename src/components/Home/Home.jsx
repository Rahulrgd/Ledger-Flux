import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Home() {
  return (
    <>
      <div className=" text-green-700">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores, voluptate laudantium esse quis magnam doloribus repudiandae repellendus, reprehenderit modi iusto. Voluptate, ipsa ea! Repellat eligendi neque aliquam est rerum!</p>
      </div>
    </>
  );
}

export default Home;
