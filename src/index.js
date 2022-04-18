import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./page/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./cardGithub"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route path="/home" component={App} />
      <Route path="/login" component={Login} />
      {/* 更加locallStorage来判断出现的页面 */}
    </Switch>
  </Router>
);
