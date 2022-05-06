import React from "react";
import { Breadcrumb } from "antd";

export default function Bread(props) {
  return (
    <Breadcrumb style={{ margin: "5px 10px" }}>
      {props.route
        .filter((item) => item.path === props.location.pathname)
        .map((item) => (
          <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
}
