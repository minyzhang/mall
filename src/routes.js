import { Home, Detail, Login } from "./page/index";

const routes = [
  {
    path: "/login",
    component: Login,
    title: "login",
    isShow: true,
  },
  {
    path: "/home",
    component: Home,
    title: "Home",
    isShow: true,
  },
  {
    path: "/detail",
    component: Detail,
    title: "home/detail",
    isShow: true,
  },
];
export default routes;
