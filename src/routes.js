import { Home, Detail, Login } from "./page/index";
import App from './App';

const routes = [
  {
    path: "/login",
    component: Login,
    title: "login",
    isShow: true,
  },
  {
    path: "/index",
    component: App,
    children: [
      {
        path: "/index/home",
        component: Home,
        title: "Home",
        isShow: true,
      },
      {
        path: "/index/detail",
        component: Detail,
        title: "Detail",
        isShow: true,
      },
    ],
  },
];
export default routes;
