import { Layout } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
// import routes from "./routes";
import { loginOut } from "./action/index";
import { Head, Bread, Contents } from "./component/index";

const App = (props) => {
  console.log(props);
  const route = props.children.filter((item) => item.isShow);
  const logout = () => {
    props.loginOut([]);
    localStorage.removeItem("login");
    return props.history.push("/login");
  };
  // useEffect(() => {
  //   if (!localStorage.getItem("login")) {
  //     props.history.push("/login");
  //   }
  // }, []);
  return (
    <Layout className="site-layout">
      <Head logout={logout} />
      <Bread route={route} {...props} />
      <Contents route={route} />
    </Layout>
  );
};

export default connect((res) => ({ ...res }), { loginOut })(withRouter(App));
