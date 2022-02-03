import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import AcUnitTwoToneIcon from "@material-ui/icons/AcUnitTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import KeyboardArrowRightTwoToneIcon from "@material-ui/icons/KeyboardArrowRightTwoTone";

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
        endIcon={<KeyboardArrowRightTwoToneIcon />}
        startIcon={<SendTwoToneIcon />}
      >
        Submit
      </Button>
      <br />
      <AcUnitTwoToneIcon color="secondary" fontSize="large" />
      <AcUnitTwoToneIcon color="secondary" fontSize="small" />
      <AcUnitTwoToneIcon color="action" fontSize="small" />
      <AcUnitTwoToneIcon color="error" fontSize="small" />
      <AcUnitTwoToneIcon color="disabled" fontSize="small" />
      <AcUnitTwoToneIcon />
    </Container>
  );
}
