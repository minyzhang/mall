import { Route, Switch } from "react-router-dom";
import Login from "../page/Login";
import App from "../App";

const Permission = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </Switch>

  //   <Switch>
  //     {data.map((item) => {
  //       const ComPo = item.component;
  //       return (
  //         <Route
  //           key={item.path}
  //           path={item.path}
  //           render={(prop) => <ComPo {...prop} />}
  //         />
  //       );
  //     })}
  //   </Switch>
);

export default Permission;
