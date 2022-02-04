import React from "react";
import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const useStyles = makeStyles({});

export default function Create() {
  const classes = useStyles();
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
        color="primary"
        variant="contained"
        onClick={() => console.log("clicked")}
        endIcon={<SendTwoToneIcon />}
      >
        Submit
      </Button>
      <br />
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("clicked")}
        endIcon={<SendTwoToneIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
