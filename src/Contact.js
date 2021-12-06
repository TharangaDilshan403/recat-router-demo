import * as React from "react";
import { Link} from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <>
    <h2>Contact</h2>
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
      <Link to="/About">
        <Button variant="outlined">About</Button>
      </Link>
    </Stack>
    </>
  );
};

export default Contact;
