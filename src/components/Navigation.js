import routes from "../routes.js";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Cherry from "../Cherry.svg";
import { useStyles } from "../styles/navigationStyles";
import NavigationItem from "./NavigationItem";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const toggleNavigation = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      classes={{
        paper: clsx(
          classes.navigationDrawer,
          !open &&
            classes.navigationDrawerCollapse
        ),
      }}
      variant="permanent"
      open={open}
    >
      <div
        className={clsx(
          classes.navigationToolbar,
          !open &&
            classes.navigationToolbarCollapse
        )}
      >
        <IconButton onClick={toggleNavigation}>
          {open ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
      </div>
      <div
        className={
          classes.navigationLogoContainer
        }
      >
        <img
          className={classes.navigationLogo}
          src={Cherry}
          alt="Cherry Logo"
        />
      </div>
      <List className={classes.navigationList}>
        {routes.map((route, index) => {
          return (
            <React.Fragment key={index}>
              {route.path === "/settings" && (
                <div
                  className={
                    classes.navigationSpacer
                  }
                ></div>
              )}
              <NavigationItem
                label={route.label}
                icon={route.icon}
                path={route.path}
              />
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Navigation;
