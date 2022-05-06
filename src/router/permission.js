import { Route, Redirect } from "react-router-dom";
// import Login from "../page/Login";
// import App from "../App";
import routes from "../routes";

const gotoPath = () => (localStorage.getItem("login") ? (
  <Redirect to="/index/home" />
) : (
  <Redirect to="/login" />
));

const Permission = () => (
  <>
    {routes.map((item) => (
      <Route key={item.path} path={item.path} render={() => <item.component {...item} />} />
    ))}

    {
      gotoPath()
    }
    {/* <Redirect to="/login" /> */}
    {/* <Route
      path="/"
      render={() => (localStorage.getItem("login") ? (
        <Redirect to="/index" />
      ) : (
        <Redirect to="/login" />
      ))}
    > */}
    {/* <Route path="/login" component={Login} />
    <Route path="/" component={App} /> */}
    {/* </Route> */}
  </>
);

export default Permission;
