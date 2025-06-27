import { Outlet } from "react-router";

import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div id="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
