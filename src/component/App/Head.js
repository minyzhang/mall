import React from "react";
import { Layout, Button } from "antd";

const { Header } = Layout;
export default function Head(props) {
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, paddingLeft: 10 }}
    >
      {localStorage.getItem("login") ? (
        <Button type="primary" onClick={props.logout}>
          退出
        </Button>
      ) : (
        ""
      )}
    </Header>
  );
}
