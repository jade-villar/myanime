import "./MyListTitleActions.css";

function MyListTitleActions({ myListItem, anime, setIsOpen }) {
  return (
    <div className="my-list-title-actions">
      {myListItem ? (
        <div className="my-list-title-actions__wrap">
          <button
            className="my-list-title-actions__btn my-list-title-actions__btn--status"
            onClick={() => setIsOpen(true)}
          >
            <span className="my-list-title-actions__status">{myListItem.myStatus}</span>
          </button>

          <p className="my-list-title-actions__divider">|</p>

          <button
            className="my-list-title-actions__btn my-list-title-actions__btn--score"
            onClick={() => setIsOpen(true)}
          >
            <img className="my-list-title-actions__score-icon" src="/star.svg" />
            <span className="my-list-title-actions__score">{`${myListItem.myScore}.0`}</span>
          </button>
        </div>
      ) : (
        <p className="my-list-title-actions__default">{anime?.data?.title}</p>
      )}
    </div>
  );
}

export default MyListTitleActions;
