import ListCard from "../Cards/ListCard";
import "./AnimeList.css";

function AnimeList({ items }) {
  const uniqueMap = new Map(items?.map((anime) => [anime.mal_id, anime]));
  const unique = Array.from(uniqueMap.values());
  const filtered = unique.filter((anime) => anime.popularity !== 0);

  return filtered.length ? (
    <section className="anime-list">
      {filtered?.map((anime) => (
        <ListCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  ) : (
    <section className="anime-list__empty">No result</section>
  );
}

export default AnimeList;
