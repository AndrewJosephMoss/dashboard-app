import routes from "./routes.js";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { useStyles } from "./styles/navigationStyles.js";
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Router>
        <Navigation />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route exact path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
