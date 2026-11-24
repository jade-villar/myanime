import { useEffect, useState } from "react";
import "./SearchForm.css";

function SearchForm({ query, handleQuery }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleQuery(inputValue.trim());
      }}
    >
      <input
        className="search-form__input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Search anime"
        autoFocus
      />
      <button className="search-form__btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
