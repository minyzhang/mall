import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./page/Login";
import store from "./store";

window.store = store;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/index" component={App} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  </Provider>,
);
