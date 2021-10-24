import { makeStyles } from "@material-ui/core";
import { NoEncryption } from "@mui/icons-material";

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  navigationLogo: {
    width: "30%",
    cursor: "pointer",
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  navigationDrawer: {
    width: 260,
    border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  },
  navigationDrawerCollapse: {
    width: theme.spacing(8),
  },
  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  navigationSpacer: {
    flex: 1,
  },
  navigationItemIcon: {
    width: "100%",
  },
  navigationItemActive: {
    backgroundColor: "rgb(200,200,200)",
  },
  navigationItem: {
    width: "90%",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
