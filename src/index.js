import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./page/Login";
import { Provider } from "react-redux";

import store from "./store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
window.store = store
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);
