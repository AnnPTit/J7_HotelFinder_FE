// Lay  out
import { HaftLayout } from "../components/Layout";

// Page
import Home from "../pages/Home";
import Room from "../pages/Room";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import CheckIn from "../pages/Admin/CheckIn";
import CheckOut from "../pages/Admin/CheckOut";
import { DefaultLayoutAdmin } from "../pages/Admin/Layout";

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

const privateRoutes = [
  {
    path: "/admin",
    component: CheckIn,
    layout: DefaultLayoutAdmin,
  },
  {
    path: "/checkout",
    component: CheckOut,
    layout: DefaultLayoutAdmin,
  },
];
export { publicRoutes, privateRoutes };
