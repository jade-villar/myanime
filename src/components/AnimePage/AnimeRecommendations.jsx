import RecommendationCard from "../Cards/RecommendationCard";
import "./AnimeRecommendations.css";

function AnimeRecommendations({ recommendations }) {
  return (
    <div className="anime-page__recommendations">
      <b className="anime-page__recommendations-label">Recommendations:</b>
      {recommendations?.data?.length ? (
        <div className="anime-page__recommendations-grid">
          {recommendations?.data?.map((recommendation) => (
            <RecommendationCard
              anime={recommendation}
              key={recommendation.entry.mal_id}
            />
          ))}
        </div>
      ) : (
        <p className="anime-page__empty">No recommendations</p>
      )}
    </div>
  );
}

export default AnimeRecommendations;
