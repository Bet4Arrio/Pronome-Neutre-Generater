import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./Assets/Styles/Styles";

var stateJwt = null;

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("mainContent")
);

serviceWorker.unregister();
