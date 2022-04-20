import React from 'react'
import { Layout,Menu } from "antd";
import { NavLink,withRouter } from "react-router-dom";
import routes from "../../routes";

const {Sider} = Layout;
const route = routes.filter((item) => item.path);


function Slider({props}) {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {route.map((item) => {
            return (
              <Menu.Item key={item.path} rou={props} icon={item.icon}>
                <NavLink to={item.path}></NavLink>
                {item.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
  )
}
export default withRouter(Slider)