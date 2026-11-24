import { handleDeleteFromMyList } from "../../services/myList";
import "./MyListUpdate.css";

function MyListUpdate({ myListItem, user }) {
  const myStatus = myListItem.myStatus.toLowerCase().replaceAll(" ", "-");

  return (
    <section className="my-list-update">
      <div className="my-list-update__meta">
        <div className={`my-list-update__div my-list-update__div--status-${myStatus}`}>
          <span className="my-list-update__status">{myListItem.myStatus}</span>
        </div>
        <div className="my-list-update__div my-list-update__div--score">
          <img className="my-list-update__score-icon" src="/star.svg" />
          <span className="my-list-update__score">{`${myListItem.myScore}/10`}</span>
        </div>
      </div>
      
      <p
        className="my-list-update__remove"
        title="Remove"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleDeleteFromMyList(user.uid, myListItem.id);
        }}
      >
        Remove
      </p>
    </section>
  );
}

export default MyListUpdate;
