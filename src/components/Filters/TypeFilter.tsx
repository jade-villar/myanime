import "./Filter.css";

function TypeFilter({ type, handleType }) {
  return (
    <div className="filter">
      <label className="filter__label" htmlFor="type">Type</label>
      <select
        className="filter__select"
        id="type"
        value={type}
        onChange={(event) => handleType(event.target.value)}
      >
        <option value="">Any</option>
        <option value="tv">TV</option>
        <option value="movie">Movie</option>
        <option value="ova">OVA</option>
        <option value="special">Special</option>
        <option value="ona">ONA</option>
        <option value="music">Music</option>
        <option value="cm">CM</option>
        <option value="pv">PV</option>
        <option value="tv_special">TV Special</option>
      </select>
    </div>
  );
}

export default TypeFilter;
