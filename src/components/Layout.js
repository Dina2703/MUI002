import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    background: "#fce4ec",
    width: "100%",
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      {/*App bar */}
      {/*Side drawer */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
