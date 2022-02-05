import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { blue, green, pink, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "2px solid red";
      }
      if (note.category === "todos") {
        return "2px solid pink";
      }
      if (note.category === "money") {
        return "2px solid green";
      }
      return "2px solid blue";
    },
  },
  avatar: {
    background: (note) => {
      if (note.category === "work") {
        return red[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
