import "./AnimeTrailer.css";

function AnimeTrailer({ anime }) {
  return (
    <div className="anime-page__trailer">
      <b className="anime-page__trailer-label">Trailer:</b>
      {anime?.data?.trailer?.embed_url ? (
        <iframe
          className="anime-page__trailer-vid"
          src={anime?.data?.trailer?.embed_url}
          title={`${anime?.data?.title} trailer`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="anime-page__empty">No trailer</p>
      )}
    </div>
  );
}

export default AnimeTrailer;
