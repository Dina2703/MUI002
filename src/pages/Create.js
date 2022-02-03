import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new Note
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("clicked")}
      >
        Submit
      </Button>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Hello")}
        >
          Click
        </Button>
        <Button variant="contained" href="https://google.com">
          Link
        </Button>
      </ButtonGroup>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
    </Container>
  );
}
