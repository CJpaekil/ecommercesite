import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "black",
        opacity:"0.5",
        fontSize: "16px",

    },
    icon:{
        color: "black",
        opacity:"0.7",
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shop" className={classes.link}>Shop</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/account" className={classes.link}>Account</Link>
            </ListItemText>
          </ListItem>
  
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact_us" className={classes.link}>Contact Us</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about_us" className={classes.link}>About Us</Link>
            </ListItemText>
          </ListItem>
    
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/track_order" className={classes.link}>Track Order</Link>
            </ListItemText>
          </ListItem>
   
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
