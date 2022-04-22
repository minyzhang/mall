import { Home, Detail } from "./page/index";

const routes = [
  {
    path: "/home",
    component: Home,
    title: "Home",
    isShow: true,
  },
  {
    path: "/detail",
    component: Detail,
    title: "Home/detail",
    isShow: true,
  },
];
export default routes;
