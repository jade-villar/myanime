import { useEffect, useState } from "react";
import axios from "axios";
import "./Filter.css";

function GenreFilter({ genre = [], handleGenre }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getAnimeGenres() {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
        setGenres(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAnimeGenres();
  }, []);

  function onChange(event) {
    const selected = Array.from(event.target.selectedOptions, (option) => Number(option.value));
    handleGenre(selected);
  }

  return (
    <div className="filter">
      <label className="filter__label" htmlFor="genre">Genre</label>
      <select
        className="filter__select"
        id="genre"
        multiple
        size="1"
        value={genre.split(",").map(Number)}
        onChange={onChange}
      >
        {genres.map((g) => (
          <option key={g.mal_id} value={g.mal_id}>{g.name}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
