import "./Filter.css";

function OrderByFilter({ orderBy, handleOrderBy }) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="order-by">Order by</label>
      <select
        className="filter__select"
        id="order-by"
        value={orderBy}
        onChange={(event) => handleOrderBy(event.target.value)}
      >
        <option value="title">Title</option>
        <option value="start_date">Start Date</option>
        <option value="episodes">Episodes</option>
        <option value="score">Score</option>
        <option value="popularity">Popularity</option>
        <option value="favorites">Favorites</option>
      </select>
    </div>
  );
}

export default OrderByFilter;
