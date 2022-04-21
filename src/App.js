import { Layout, Breadcrumb, Button } from "antd";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
// eslint-disable-next-line import/no-cycle
import routes from "./routes";

const { Header, Content } = Layout;
const route = routes.filter((item) => item.path);

const App = (props) => {
  const logout = () => {
    localStorage.removeItem("login");
    return props.history.push("/login");
  };
  return (
    <Layout>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, paddingLeft: 10 }}
        >
          {localStorage.getItem("login") ? (
            <Button type="primary" onClick={logout}>
              退出
            </Button>
          ) : (
            ""
          )}
        </Header>
        {/* 导航栏 */}
        <Breadcrumb style={{ margin: "5px 10px" }}>
          {route
            .filter((item) => item.path === props.location.pathname)
            .map((item) => (
              <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
            ))}
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
                  render={(prop) => <ComPo {...prop} />}
                />
              );
            })}
            <Redirect from="/" to="/home" exact />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect((res) => ({ ...res.TypeData }))(App);
