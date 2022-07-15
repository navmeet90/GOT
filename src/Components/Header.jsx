import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import logo from "../images/logo.jpg";

const useStyle = makeStyles({
  header: {
    background: "#000000",
  },
  image: {
    width: 250,
  },
});
function Header() {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <img src={logo} className={classes.image} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
