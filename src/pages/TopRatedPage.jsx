import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeList from "../components/PageContent/AnimeList";
import Pagination from "../components/PageContent/Pagination";
import TypeFilter from "../components/Filters/TypeFilter";
import GenreFilter from "../components/Filters/GenreFilter";
import SortFilter from "../components/Filters/SortFilter";
import LoadingList from "../components/Loading/LoadingList";
import "./TopRatedPage.css";

function TopRatedPage({ topRatedAnimes, setSearchParams, type, genre, sort, page, isLoadingTopRated }) {
  function handleType(newType) {
    setSearchParams({
      type: newType,
      genre: genre,
      sort: sort,
      page: 1,
    });
  }

  function handleGenre(newGenre) {
    setSearchParams({
      type: type,
      genre: newGenre.join(","),
      sort: sort,
      page: 1,
    });
  }

  function handleSort(newSort) {
    setSearchParams({
      type: type,
      genre: genre,
      sort: newSort,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      type: type,
      genre: genre,
      sort: sort,
      page: newPage,
    });
  }

  return (
    <main className="top-rated-page">
      <ContentHeader
        title="Top Rated"
        filters={
          <>
            <TypeFilter type={type} handleType={handleType} />
            <GenreFilter genre={genre} handleGenre={handleGenre} />
            <SortFilter sort={sort} handleSort={handleSort} />
          </>
        }
      />
      {isLoadingTopRated ? <LoadingList /> : <AnimeList items={topRatedAnimes?.data} />}
      <Pagination animes={topRatedAnimes} page={page} handlePage={handlePage} />
    </main>
  );
}

export default TopRatedPage;
