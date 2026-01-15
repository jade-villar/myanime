import { Link } from "react-router";
import "./AnimeStat.css";

function AnimeStat({ label, value }) {
  const displayValue =
    value === null ||
    value === undefined ||
    value === "" ||
    value === "null" ||
    value === "#null" ||
    value?.length === 0
      ? "N/A"
      : value;

  return (
    <div className="anime-stat">
      <p className="anime-stat__label">{label}</p>
      {Array.isArray(displayValue) ? (
        <ul className="anime-stat__values">
          {displayValue.map((item) => (
            <Link
              className="anime-stat__link"
              to={`/producer/${item.mal_id}`}
              key={item.mal_id}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      ) : (
        <p className="anime-stat__value">{displayValue}</p>
      )}
    </div>
  );
}

export default AnimeStat;
