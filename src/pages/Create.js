import { useState } from "react";
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 40,
    display: "block",
  },
  btn: {
    margin: 10,
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
    }
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
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
      </form>
    </Container>
  );
}
