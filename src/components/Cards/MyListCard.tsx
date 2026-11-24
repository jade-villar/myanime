import { Link } from "react-router";
import MyListUpdate from "../MyListPage/MyListUpdate";
import "./MyListCard.css";

function MyListCard({ myListItem, user }) {
  return (
    <div className="my-list-card">
      <Link className="my-list-card__link" to={`/anime/${myListItem.mal_id}`}>
        <figure className="my-list-card__poster">
          <img className="my-list-card__poster-image" src={myListItem.image} />
          <div className="my-list-card__score">
            <p className="my-list-card__score-count">{myListItem.myScore}</p>
            <p className="my-list-card__score-label">My Score</p>
          </div>
        </figure>
        <div className="my-list-card__meta">
          <div className="my-list-card__meta-header">
            <p className="my-list-card__title">
              {myListItem.titleEnglish || myListItem.title}
            </p>
            <p className="my-list-card__synopsis">{myListItem.synopsis}</p>
          </div>
          <div className="my-list-card__meta-footer">
            <MyListUpdate myListItem={myListItem} user={user} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MyListCard;
