import React from "react";
import { Layout } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";

const { Content } = Layout;

export default function Contents(props) {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Switch>
        {props.route.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            render={(prop) => <item.component {...prop} />}
          />
        ))}
        <Redirect from="/index" to="/home" exact />
      </Switch>
    </Content>
  );
}
