import { Link } from "react-router";
import "./AnimeCard.css";

function AnimeCard({ anime }) {
  return (
    <div className="anime-card">
      <Link className="anime-card__link" to={`/anime/${anime.mal_id}`}>
        <div className="anime-card__poster">
          <img
            className="anime-card__poster-image"
            src={anime?.images?.jpg?.large_image_url}
          />
          {anime?.score ? (
            <div className="anime-card__score">
              <p className="anime-card__score-count">{anime?.score}</p>
              <p className="anime-card__score-label">Score</p>
            </div>
          ) : (
            <div className="anime-card__favorites">
              <p className="anime-card__favorites-count">{anime?.favorites}</p>
              <p className="anime-card__favorites-label">Favorites</p>
            </div>
          )}
        </div>
        <p className="anime-card__title">
          {anime.title_english || anime.title}
        </p>
      </Link>
    </div>
  );
}

export default AnimeCard;
