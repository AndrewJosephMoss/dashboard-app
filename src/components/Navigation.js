import routes from "../routes.js";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Cherry from "../Cherry.svg";
import NavigationItem from "./NavigationItem";
import React, { useState } from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { AppBar } from "@mui/material";
import { useStyles } from "../styles/navigationStyles";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const subSm = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (subSm) {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        className={classes.appBar}
        style={{ background: "rgb(190,190,190)" }}
      >
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            component="h1"
            variant="h6"
          >
            Appbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open &&
              classes.navigationDrawerCollapse
          ),
        }}
        variant={
          subSm ? "temporary" : "permanent"
        }
        open={open}
      >
        {console.log(subSm)}
        <div
          className={clsx(
            classes.navigationToolbar,
            !open &&
              classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? (
              <ChevronLeft />
            ) : (
              <MenuIcon />
            )}
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
                  onClick={closeNavigation}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
