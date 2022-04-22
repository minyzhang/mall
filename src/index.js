import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import App from "./App";
// import Login from "./page/Login";
import store from "./store";
import Permission from "./router/permission";

window.store = store;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Permission {...store} />
      </Switch>
    </Router>
  </Provider>,
);
