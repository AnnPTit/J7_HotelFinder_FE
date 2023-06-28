// Lay  out
import { HaftLayout } from "../components/Layout";

// Page
import Home from "../pages/Home";
import Room from "../pages/Room";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/room",
    component: Room,
  },
  {
    path: "/contact",
    component: Contact,
    layout: HaftLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
