import { Link, useMatch } from "react-router";
import capitalize from "../../utils/capitalize";
import joinListObject from "../../utils/joinListObject";
import "./ListCard.css";

function ListCard({ anime }) {
  const topRatedMatch = useMatch("/top-rated/*");

  return (
    <div className="list-card">
      <Link className="list-card__link" to={`/anime/${anime.mal_id}`}>
        <figure className="list-card__poster">
          <img
            className="list-card__poster-image"
            src={anime.images.jpg.large_image_url}
          />
          {anime.score ? (
            <div className="list-card__score">
              <p className="list-card__score-count">{anime.score}</p>
              <p className="list-card__score-label">Score</p>
            </div>
          ) : (
            <div className="list-card__favorites">
              <p className="list-card__favorites-count">{anime.favorites}</p>
              <p className="list-card__favorites-label">Favorites</p>
            </div>
          )}
        </figure>
        <div className="list-card__meta">
          <div className="list-card__meta-header">
            <div className="list-card__title-group">
              <p className="list-card__title">
                {anime.title_english || anime.title}
              </p>
              {topRatedMatch && (
                <p className={`list-card__rank list-card__rank--${anime.rank}`}>
                  <small className="list-card__rank-hash">#</small>
                  {anime.rank}
                </p>
              )}
            </div>
            <div className="list-card__synopsis-group">
              <p className="list-card__synopsis">{anime.synopsis}</p>
              <p className="list-card__year">
                <span className="list-card__type">{anime.type}</span>
                {anime.season && ` - ${capitalize(anime.season)} ${anime.year}`}
              </p>
            </div>
          </div>
          <div className="list-card__meta-footer">
            <p className="list-card__studios">{joinListObject(anime.studios)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListCard;
