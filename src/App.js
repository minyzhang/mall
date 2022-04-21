import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import routes from "./routes";
import { connect } from "react-redux";
import { toggle } from "./action/index";

const { Header, Sider, Content } = Layout;
const route = routes.filter((item) => item.path);
const App = (props) => {
  const toggle = () => {
    props.toggle(props.collapsed);
  };
  return (
    <Layout>
      {/* 侧边导航栏 */}
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
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, paddingLeft: 10 }}
        >
          {React.createElement(
            props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        {/* 导航栏 */}
        <Breadcrumb style={{ margin: "5px 10px" }}>
          {route
            .filter((item) => item.path === props.location.pathname)
            .map((item) => {
              return (
                <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
              );
            })}
        </Breadcrumb>
        {/* 内容展示 */}
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            {route.map((item) => {
              const ComPo = item.component;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  render={(prop) => {
                    return <ComPo {...prop} />;
                  }}
                ></Route>
              );
            })}
            <Redirect from="/index" to="/home" exact></Redirect>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
export default connect(
  (res) => {
    return { ...res.TypeData };
  },
  { toggle }
)(App);
