import { useMatch } from "react-router";
import "./Filter.css";

function YearFilter({ year, handleYear }) {
  const popularMatch = useMatch("/popular/*");

  const date = new Date();
  const yearsForSeasonPage = [];
  const yearsForPopularPage = [];

  for (let y = date.getFullYear() + 2; y >= 1900; y--) {
    yearsForSeasonPage.push(y);
  }

  for (let y = date.getFullYear(); y >= 1900; y--) {
    yearsForPopularPage.push(y);
  }

  return (
    <div className="filter">
      <label className="filter__label" htmlFor="year">Year</label>
      <select
        className="filter__select"
        id="year"
        value={year}
        onChange={(event) => handleYear(event.target.value)}
      >
        {popularMatch ? (
          <>
            <option value="">Any</option>
            {yearsForPopularPage.map((yearOption) => (
              <option value={yearOption} key={yearOption}>{yearOption}</option>
            ))}
          </>
        ) : (
          <>
            {yearsForSeasonPage.map((yearOption) => (
              <option value={yearOption} key={yearOption}>{yearOption}</option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}

export default YearFilter;
