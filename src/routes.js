import {
  CompareArrows,
  Settings,
  Dashboard,
  Dock,
  Map,
} from "@mui/icons-material";
import DashboardPage from "./pages/Dashboard.js";
import DockerPage from "./pages/Docker.js";
import GisPage from "./pages/Gis.js";
import PhpPage from "./pages/Php.js";
import SettingsPage from "./pages/Settings.js";

const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    label: "PHP",
    path: "/php",
    icon: CompareArrows,
    component: PhpPage,
  },
  {
    label: "Docker",
    path: "/docker",
    icon: Dock,
    component: DockerPage,
  },
  {
    label: "GIS",
    path: "/map",
    icon: Map,
    component: GisPage,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
    component: SettingsPage,
  },
];

export default routes;
