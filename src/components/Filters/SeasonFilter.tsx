import "./Filter.css";

function SeasonFilter({ season, handleSeason }) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="season">Season</label>
      <select
        className="filter__select"
        id="season"
        value={season}
        onChange={(event) => handleSeason(event.target.value)}
      >
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
      </select>
    </div>
  );
}

export default SeasonFilter;
