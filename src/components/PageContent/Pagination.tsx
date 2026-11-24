import "./Pagination.css";

function Pagination({ animes, page, handlePage }) {
  return (
    <section className="pagination">
      <button
        className="pagination__btn pagination__btn--previous"
        disabled={Number(page) === 1}
        onClick={() => handlePage(Number(page) - 1)}
      >
        Prev
      </button>

      <div className="pagination__page">
        {`Page ${animes?.pagination?.current_page || 1} of ${animes?.pagination?.last_visible_page || 1}`}
      </div>

      <button
        className="pagination__btn pagination__btn--next"
        disabled={!animes?.pagination?.has_next_page}
        onClick={() => handlePage(Number(page) + 1)}
      >
        Next
      </button>
    </section>
  );
}

export default Pagination;
