import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeGrid from "../components/PageContent/AnimeGrid";
import Pagination from "../components/PageContent/Pagination";
import YearFilter from "../components/Filters/YearFilter";
import SeasonFilter from "../components/Filters/SeasonFilter";
import TypeFilter from "../components/Filters/TypeFilter";
import LoadingGrid from "../components/Loading/LoadingGrid";
import Toast from "../components/Toast/Toast";
import capitalize from "../utils/capitalize";
import "./SeasonPage.css";

function SeasonPage({ seasonAnimes, setSearchParams, year, season, type, page, isLoadingSeason, toast }) {
  function handleYear(newYear) {
    setSearchParams({
      type: type,
      year: newYear,
      season: season,
      page: 1,
    });
  }

  function handleSeason(newSeason) {
    setSearchParams({
      type: type,
      year: year,
      season: newSeason,
      page: 1,
    });
  }

  function handleType(newType) {
    setSearchParams({
      type: newType,
      year: year,
      season: season,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      type: type,
      year: year,
      season: season,
      page: newPage,
    });
  }

  return (
    <main className="season-page">
      <ContentHeader
        title={`${capitalize(season)} ${year} Animes`}
        filters={
          <>
            <YearFilter year={year} handleYear={handleYear} />
            <SeasonFilter season={season} handleSeason={handleSeason} />
            <TypeFilter type={type} handleType={handleType} />
          </>
        }
      />
      {isLoadingSeason ? <LoadingGrid /> : <AnimeGrid items={seasonAnimes?.data} />}
      <Pagination animes={seasonAnimes} page={page} handlePage={handlePage} />
      {toast && <Toast message={toast.message} />}
    </main>
  );
}

export default SeasonPage;
