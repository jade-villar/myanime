import MyListActions from "../MyListPage/MyListActions";
import AnimeStats from "./AnimeStats";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeTrailer from "./AnimeTrailer";
import AnimeRelations from "./AnimeRelations";
import AnimeRecommendations from "./AnimeRecommendations";
import "./AnimePageBody.css";

function AnimePageBody({ anime, recommendations, myListItem, setIsOpen }) {
  return (
    <section className="anime-page__body">
      {myListItem && <MyListActions myListItem={myListItem} setIsOpen={setIsOpen} />}
      <AnimeSynopsis anime={anime} />
      <AnimeStats anime={anime} />
      <AnimeTrailer anime={anime} />
      <AnimeRelations anime={anime} />
      <AnimeRecommendations recommendations={recommendations} />
    </section>
  );
}

export default AnimePageBody;
