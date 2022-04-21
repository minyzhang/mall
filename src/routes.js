import { Home, Detail } from "./page/index";
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
    path: "/detail",
    component: Detail,
    title: "detail",
    isShow: true,
    icon: <VideoCameraOutlined />,
  },
];
export default routes;
