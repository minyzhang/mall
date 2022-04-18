import { Home, GoodsList,Login } from "./page/index";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
const routes = [
  {
    path: "/login",
    component: Login,
    title: "Login",
    isShow: true,
    icon: <VideoCameraOutlined/>,
  },
  {
    path: "/home",
    component: Home,
    title: "Home",
    isShow: true,
    icon: <UserOutlined/>,
  },
  {
    path: "/goods",
    component: GoodsList,
    title: "goods",
    isShow: true,
    icon: <VideoCameraOutlined/>,
  },
];
export default routes;
