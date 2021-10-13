import { Switch, Route, Redirect } from "react-router-dom";
import Edit from "./pages/edit";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ScreamID from "./pages/screamPost";
import Signup from "./pages/signup";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/scream/:screamId">
        <ScreamID />
      </Route>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="/edit">
        <Edit />
      </PrivateRoute>
      <Route path="/home">
        < Home/>
      </Route>
    </Switch>
  );
}

export default Routes;
