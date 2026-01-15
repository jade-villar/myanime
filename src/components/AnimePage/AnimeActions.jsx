import { Link, useNavigate } from "react-router";
import { handlePostToMyList } from "../../services/myList";
import { handleDeleteFromMyList } from "../../services/myList";
import "./AnimeActions.css";

function AnimeActions({ anime, myListItem, user }) {
  const navigate = useNavigate();

  async function handleAdd() {
    try {
      if (!user) {
        navigate("/register");
      } else {
        handlePostToMyList(user.uid, anime);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="anime-page__actions">
      {!myListItem ? (
        <button
          className="anime-page__action anime-page__action--add"
          title="Add to my list"
          onClick={handleAdd}
        >
          <img className="anime-page__action-icon" src="/bookmark-add.svg" />
        </button>
      ) : (
        <button
          className="anime-page__action anime-page__action--added"
          title="Remove from my list"
          onClick={() => handleDeleteFromMyList(user.uid, myListItem.id)}
        >
          <img className="anime-page__action-icon" src="/bookmark-check.svg" />
        </button>
      )}
      <Link
        className="anime-page__trailer-link"
        to={anime?.data?.trailer?.embed_url}
        target="_blank"
      >
        <button
          className="anime-page__action anime-page__action--trailer"
          title="Watch trailer"
        >
          Watch Trailer
        </button>
      </Link>
    </div>
  );
}

export default AnimeActions;
