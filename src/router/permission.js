import { Route } from "react-router-dom";
import Login from "../page/Login";
import App from "../App";

const Permission = () => (
  <>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </>
);

export default Permission;
