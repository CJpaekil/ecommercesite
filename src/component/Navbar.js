import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  Navbg: {
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "1px solid #e8e8f1",
    color:"black",
  },
  sign: {
    color:"black",
    opacity:"0.5",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  Signlink: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    opacity:"0.7",
    marginLeft: theme.spacing(5),
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.Navbg}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/shop" className={classes.link}>
              Shop
            </Link>
            <Link to="/account" className={classes.link}>
              Account
            </Link>
            <Link to="/contact_us" className={classes.link}>
              Contact Us
            </Link>
            <Link to="/about_us" className={classes.link}>
              About Us
            </Link>
            <Link to="/track_order" className={classes.link}>
              Track Order
            </Link>
          </Box>
        )}
        <Typography variant="h6" className={classes.logo}>
          Good Afternoon
        </Typography>
        <Link to="/" className={classes.Signlink}>Sign in</Link>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
