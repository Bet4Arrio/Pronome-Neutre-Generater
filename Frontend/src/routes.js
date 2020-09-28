import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Views/Home/Index";

const HomePage = () => <Home />;

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
);

export default Routes;
