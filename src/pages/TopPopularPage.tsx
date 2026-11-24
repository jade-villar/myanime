import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeGrid from "../components/PageContent/AnimeGrid";
import Pagination from "../components/PageContent/Pagination";
import YearFilter from "../components/Filters/YearFilter";
import TypeFilter from "../components/Filters/TypeFilter";
import GenreFilter from "../components/Filters/GenreFilter";
import SortFilter from "../components/Filters/SortFilter";
import LoadingGrid from "../components/Loading/LoadingGrid";
import Toast from "../components/Toast/Toast";
import "./TopPopularPage.css";

function TopPopularPage({ topPopularAnimes, setSearchParams, startDate, endDate,
  type, genre, sort, page, isLoadingTopPopular, toast,
}) {
  function handleYear(newYear) {
    setSearchParams({
      start_date: newYear,
      end_date: newYear !== "" ? Number(newYear) + 1 : newYear,
      type: type,
      genre: genre,
      sort: sort,
      page: 1,
    });
  }

  function handleType(newType) {
    setSearchParams({
      start_date: startDate,
      end_date: endDate,
      type: newType,
      genre: genre,
      sort: sort,
      page: 1,
    });
  }

  function handleGenre(newGenre) {
    setSearchParams({
      start_date: startDate,
      end_date: endDate,
      type: type,
      genre: newGenre.join(","),
      sort: sort,
      page: 1,
    });
  }

  function handleSort(newSort) {
    setSearchParams({
      start_date: startDate,
      end_date: endDate,
      type: type,
      genre: genre,
      sort: newSort,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      start_date: startDate,
      end_date: endDate,
      type: type,
      genre: genre,
      sort: sort,
      page: newPage,
    });
  }

  return (
    <main className="popular-page">
      <ContentHeader
        title={`Popular ${startDate ? startDate : "All Time"}`}
        filters={
          <>
            <YearFilter year={startDate} handleYear={handleYear} />
            <TypeFilter type={type} handleType={handleType} />
            <GenreFilter genre={genre} handleGenre={handleGenre} />
            <SortFilter sort={sort} handleSort={handleSort} />
          </>
        }
        />
      {isLoadingTopPopular ? <LoadingGrid /> : <AnimeGrid items={topPopularAnimes?.data} />}
      <Pagination animes={topPopularAnimes} page={page} handlePage={handlePage} />
      {toast && <Toast message={toast.message} />}
    </main>
  );
}

export default TopPopularPage;
