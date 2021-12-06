import * as React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <Stack
        spacing={2}
        direction="row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Button variant="outlined">Home</Button>
        </Link>
        <Link to="/Contact">
          <Button variant="outlined">Contact</Button>
        </Link>
      </Stack>
    </>
  );
};

export default About;
