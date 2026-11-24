import { useMatch } from "react-router";
import "./LoadingGrid.css";

function LoadingGrid() {
  const homeMatch = useMatch("/");

  return (
    <section className={`loading-anime-grid ${homeMatch ? "loading-anime-grid--home" : ""}`}>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
      <div className="loading-anime-card">
        <div className="loading-anime-card__poster"></div>
        <div className="loading-anime-card__title"></div>
      </div>
    </section>
  );
}

export default LoadingGrid;
