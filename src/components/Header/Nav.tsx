import { NavLink } from "react-router";
import "./Nav.css";

function Nav() {
  return (
    <nav className="header__nav">
      <NavLink className="header__nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="header__nav-link" to="/search">
        Search
      </NavLink>
      <NavLink className="header__nav-link" to="/my-list">
        My List
      </NavLink>
    </nav>
  );
}

export default Nav;
