"use strict";
import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import MainContainer from "./containers/MainContainer.js";

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById("main")
);
