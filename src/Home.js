import * as React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
    <h2>HOME.</h2>
    <Stack
      spacing={2}
      direction="row"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Link to="/About">
        <Button variant="outlined">About.</Button>
      </Link>
      <Link to="/Contact">
        <Button variant="outlined">Contact</Button>
      </Link>
    </Stack>
    </>
  );
};

export default Home;
