import { makeStyles } from "@material-ui/core";
import { Drawer, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "#fce4ec",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/*App bar */}
      {/*Side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5">Some Notes</Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
