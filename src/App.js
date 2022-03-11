import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SetProfile from "./components/SetProfile";
import { PrivateRoute } from "./PrivateRoute";
import "./assets/css/styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/set-profile" component={SetProfile} />
      </Switch>
    </div>
  );
}