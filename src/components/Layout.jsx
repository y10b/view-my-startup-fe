import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/UI modules/header/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
