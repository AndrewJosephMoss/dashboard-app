import { SvgIcon } from "@material-ui/core";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useStyles } from "../styles/navigationStyles";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { buttonBaseClasses } from "@mui/material";
import {
  Link,
  useLocation,
} from "react-router-dom";

const NavigationItem = ({
  label,
  icon,
  path,
}) => {
  const classes = useStyles();
  const [active, setActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname === path);
  }, [location]);

  return (
    <ListItem
      className={clsx(
        classes.navigationItem,
        active && classes.navigationItemActive
      )}
      button
      component={Link}
      to={path}
    >
      <ListItemIcon>
        <SvgIcon
          className={classes.navigationItemIcon}
          color={active ? "primary" : "secondary"}
          component={icon}
        ></SvgIcon>
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          variant: "body2",
        }}
      ></ListItemText>
    </ListItem>
  );
};

export default NavigationItem;
