import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeGrid from "../components/PageContent/AnimeGrid";
import Pagination from "../components/PageContent/Pagination";
import TypeFilter from "../components/Filters/TypeFilter";
import LoadingGrid from "../components/Loading/LoadingGrid";
import Toast from "../components/Toast/Toast";
import "./AiringPage.css";

function AiringPage({ airingAnimes, setSearchParams, type, page, isLoadingAiring, toast }) {
  function handleType(newType) {
    setSearchParams({
      type: newType,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      type: type,
      page: newPage,
    });
  }

  return (
    <main className="airing-page">
      <ContentHeader
        title="Airing Animes"
        filters={<TypeFilter type={type} handleType={handleType} />}
      />
      {isLoadingAiring ? <LoadingGrid /> : <AnimeGrid items={airingAnimes?.data} />}
      <Pagination animes={airingAnimes} page={page} handlePage={handlePage} />
      {toast && <Toast message={toast.message} />}
    </main>
  );
}

export default AiringPage;
