import { Link } from "react-router";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero__title">Discover your next favorite anime</p>
      <p className="hero__subtitle">Search, track, and save your favorite anime in one place.</p>
      <Link className="hero__search" to={"/search"}>
        <input
          className="hero__search-input"
          type="text"
          placeholder="Search anime..."
        />
        <img className="hero__search-icon" src="/search.svg" />
      </Link>
    </section>
  );
}

export default Hero;
