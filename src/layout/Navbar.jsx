import { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header id="navbar" className={open ? "open" : ""}>
      <button id="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={open ? "open" : ""}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/videobooth">Video Booth</NavLink>
        {token ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}
