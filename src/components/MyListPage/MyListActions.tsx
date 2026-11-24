import "./MyListActions.css";

function MyListActions({ myListItem, setIsOpen }) {
  const myStatus = myListItem.myStatus.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="my-list-actions">
      <button
        className={`my-list-actions__btn my-list-actions__btn--status-${myStatus}`}
        onClick={() => setIsOpen(true)}
      >
        <span className="my-list-actions__status">{myListItem.myStatus}</span>
      </button>
      <button
        className="my-list-actions__btn my-list-actions__btn--score"
        onClick={() => setIsOpen(true)}
      >
        <img className="my-list-actions__score-icon" src="/star.svg" />
        <span className="my-list-actions__score">{`${myListItem.myScore}/10`}</span>
      </button>
    </div>
  );
}

export default MyListActions;
