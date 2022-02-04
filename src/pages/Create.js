import React from "react";
import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        className={classes.title}
      >
        Create a new Note
      </Typography>
      <Button
        className={classes.btn}
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
