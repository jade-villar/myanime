import { Link } from "react-router";
import "./RecommendationCard.css";

function RecommendationCard({ anime }) {
  return (
    <div className="recommendation-card">
      <Link className="recommendation-card__link" to={`/anime/${anime?.entry?.mal_id}`}>
        <div className="recommendation-card__poster">
          <img
            className="recommendation-card__poster-image"
            src={anime?.entry?.images?.jpg?.large_image_url}
          />
          <div className="recommendation-card__votes">
            <p className="recommendation-card__votes-count">{anime?.votes}</p>
            <p className="recommendation-card__votes-label">Votes</p>
          </div>
        </div>
        <p className="recommendation-card__title">{anime?.entry?.title}</p>
      </Link>
    </div>
  );
}

export default RecommendationCard;
