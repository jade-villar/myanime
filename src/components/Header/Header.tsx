import { useEffect, useState } from "react";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__wrap">
        <p className="header__brand">MyAnime</p>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
