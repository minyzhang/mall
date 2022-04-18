import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import routes from "./routes";

const { Header, Sider, Content } = Layout;
const route = routes.filter((item) => item.isShow === true);
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        {/* 侧边导航栏 */}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {route.map((item) => {
              return (
                <Menu.Item key={item.path} icon={item.icon}>
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
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          {/* 导航栏 */}
          <Breadcrumb style={{ margin: "5px 10px" }}>
            {route.map((item) => {
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
                    render={(props) => {
                      return <ComPo {...props} />;
                    }}
                  ></Route>
                );
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;
