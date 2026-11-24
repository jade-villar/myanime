import AnimeStat from "./AnimeStat";
import capitalize from "../../utils/capitalize";
import joinList from "../../utils/joinList";
import joinListObject from "../../utils/joinListObject";
import "./AnimeStats.css";

function AnimeStats({ anime }) {
  return (
    <div className="anime-page__stats">
      <div className="anime-page__stats-group">
        <AnimeStat label="Rank" value={`#${anime?.data?.rank}`} />
        <AnimeStat label="Score" value={anime?.data?.score} />
        <AnimeStat label="Popularity" value={`#${anime?.data?.popularity}`} />
        <AnimeStat label="Favorites" value={anime?.data?.favorites} />
      </div>

      <div className="anime-page__stats-group">
        <AnimeStat label="Synonyms" value={joinList(anime?.data?.title_synonyms)} />
        <AnimeStat label="Japanese" value={anime?.data?.title_japanese} />
        <AnimeStat label="Type" value={anime?.data?.type} />
        <AnimeStat label="Episodes" value={anime?.data?.episodes} />
        <AnimeStat label="Status" value={anime?.data?.status} />
        <AnimeStat label="Aired" value={anime?.data?.aired?.string} />
        <AnimeStat label="Year" value={anime?.data?.year} />
        <AnimeStat label="Season" value={capitalize(anime?.data?.season)} />
        <AnimeStat label="Studios" value={anime?.data?.studios} />
        <AnimeStat label="Producers" value={anime?.data?.producers} />
        <AnimeStat label="Licensors" value={anime?.data?.licensors} />
        <AnimeStat label="Source" value={anime?.data?.source} />
        <AnimeStat label="Genres" value={joinListObject(anime?.data?.genres)} />
        <AnimeStat label="Demographic" value={joinListObject(anime?.data?.demographics)} />
        <AnimeStat label="Duration" value={anime?.data?.duration} />
        <AnimeStat label="Rating" value={anime?.data?.rating} />
      </div>
    </div>
  );
}

export default AnimeStats;
