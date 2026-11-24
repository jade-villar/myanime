import "./AnimeSynopsis.css";

function AnimeSynopsis({ anime }) {
  return (
    <div className="anime-page__synopsis">
      {anime?.data?.synopsis ? (
        <p className="anime-page__synopsis-p">{anime?.data?.synopsis}</p>
      ) : (
        <p className="anime-page__empty">No synopsis</p>
      )}
    </div>
  );
}

export default AnimeSynopsis;
