import { useMatch } from "react-router";
import AnimeCard from "../Cards/AnimeCard";
import "./AnimeGrid.css";

function AnimeGrid({ items }) {
  const homeMatch = useMatch("/");

  const uniqueMap = new Map(items?.map((anime) => [anime.mal_id, anime]));
  const unique = Array.from(uniqueMap.values());
  const filtered = unique.filter((anime) => anime.popularity !== 0);

  return filtered.length ? (
    <section className={`anime-grid ${homeMatch ? "anime-grid--home" : ""}`}>
      {filtered?.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  ) : (
    <section className="anime-grid__empty">No result</section>
  );
}

export default AnimeGrid;
