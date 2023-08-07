import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import MyAccount from "../pages/MyAccount";
import Builders from "../pages/Builders";
import Forgot from "../pages/auth/Forgot";
import Reset from "../pages/auth/Reset";
import Verified from "../pages/auth/Verified";

export default function PageRoutes() {
  const routes = [
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/forgot",
      Component: Forgot,
    },
    {
      path: "/verified",
      Component: Verified,
    },
    {
      path: "/reset",
      Component: Reset,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/my-account",
      Component: MyAccount,
    },
    {
      path: "/builders",
      Component: Builders,
    },
  ];

  const Routing = routes.map(({ path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />
  ));

  return (
    <div className="">
      <Routes>{Routing}</Routes>
    </div>
  );
}
