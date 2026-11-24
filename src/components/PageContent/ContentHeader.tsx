import { useState } from "react";
import { Link, useMatch } from "react-router";
import "./ContentHeader.css";

function ContentHeader({ title, filters, link }) {
  const [showFilters, setShowFilters] = useState(false);

  const homeMatch = useMatch("/");
  const searchMatch = useMatch("/search/*");
  const producerMatch = useMatch("/producer/*");
  const myListMatch = useMatch("/my-list/*");

  const isSmallTitle = homeMatch || searchMatch || producerMatch;
  const showMoreLink = homeMatch;
  const showFilterButton = !homeMatch && !myListMatch;

  function toggleFilters() {
    setShowFilters(!showFilters);
  }

  return (
    <section className="content-header">
      <div className="content-header__main">
        <p className={`content-header__title ${isSmallTitle ? "content-header__title--small" : ""}`}>
          {title}
        </p>
        {showMoreLink ? (
          <Link to={link} className="content-header__link">More</Link>
        ) : (
          showFilterButton && (
            <button className="content-header__filter-btn" onClick={toggleFilters}>
              <img className="content-header__filter-icon" src="/filter.svg" />
            </button>
          )
        )}
      </div>
      {showFilters && <div className="content-header__filters">{filters}</div>}
    </section>
  );
}

export default ContentHeader;
