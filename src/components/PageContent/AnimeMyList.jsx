import MyListCard from "../Cards/MyListCard";
import "./AnimeMyList.css";

function AnimeMyList({ items, user }) {
  return items.length ? (
    <section className="anime-my-list">
      {items?.map((myListItem) => (
        <MyListCard key={myListItem.id} myListItem={myListItem} user={user} />
      ))}
    </section>
  ) : (
    <section className="anime-my-list__empty">Add anime to your list</section>
  );
}

export default AnimeMyList;
