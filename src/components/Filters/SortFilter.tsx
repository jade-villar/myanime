import "./Filter.css";

function SortFilter({ sort, handleSort }) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="sort">Sort</label>
      <select
        className="filter__select"
        id="sort"
        value={sort}
        onChange={(event) => handleSort(event.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortFilter;
