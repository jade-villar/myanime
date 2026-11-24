import AnimeActions from "./AnimeActions";
import MyListTitleActions from "../MyListPage/MyListTitleActions";
import LoadingPoster from "../Loading/LoadingPoster";
import "./AnimePageHeader.css";

function AnimePageHeader({ anime, myListItem, user, setIsOpen, isLoading }) {
  return (
    <section className="anime-page__header">
      <figure className="anime-page__poster">
        {isLoading ? (
          <LoadingPoster />
        ) : (
          <img
            className="anime-page__poster-image"
            src={anime?.data?.images?.jpg?.large_image_url}
          />
        )}
      </figure>

      <div className="anime-page__meta">
        <div className="anime-page__titles">
          <p className="anime-page__title anime-page__title--english">
            {anime?.data?.title_english || anime?.data?.title}
          </p>
          <p className="anime-page__title anime-page__title--default">
            {anime?.data?.title}
          </p>

          <MyListTitleActions myListItem={myListItem} anime={anime} setIsOpen={setIsOpen} />
        </div>

        <AnimeActions anime={anime} myListItem={myListItem} user={user} />
      </div>
    </section>
  );
}

export default AnimePageHeader;
