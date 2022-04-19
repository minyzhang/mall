import { Home, GoodsList } from "./page/index";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/home",
    component: Home,
    title: "Home",
    isShow: true,
    icon: <UserOutlined />,
  },
  {
    path: "/goods",
    component: GoodsList,
    title: "goods",
    isShow: true,
    icon: <VideoCameraOutlined />,
  },
];
export default routes;
