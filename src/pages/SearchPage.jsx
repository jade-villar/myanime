import SearchForm from "../components/SearchPage/SearchForm";
import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeList from "../components/PageContent/AnimeList";
import Pagination from "../components/PageContent/Pagination";
import TypeFilter from "../components/Filters/TypeFilter";
import OrderByFilter from "../components/Filters/OrderByFilter";
import SortFilter from "../components/Filters/SortFilter";
import LoadingList from "../components/Loading/LoadingList";
import "./SearchPage.css";

function SearchPage({ searchList, setSearchParams, query, type, orderBy, sort, page, isLoadingSearch }) {
  function handleQuery(newQuery) {
    setSearchParams({
      q: newQuery,
      type: type,
      order_by: orderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleType(newType) {
    setSearchParams({
      q: query,
      type: newType,
      order_by: orderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleOrderBy(newOrderBy) {
    setSearchParams({
      q: query,
      type: type,
      order_by: newOrderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleSort(newSort) {
    setSearchParams({
      q: query,
      type: type,
      order_by: orderBy,
      sort: newSort,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      q: query,
      type: type,
      order_by: orderBy,
      sort: sort,
      page: newPage,
    });
  }

  return (
    <section className="search-page">
      <SearchForm query={query} handleQuery={handleQuery} />
      {query && (
        <div className="search-results">
          <ContentHeader
            title={`Results for ${query}`}
            filters={
              <>
                <TypeFilter type={type} handleType={handleType} />
                <OrderByFilter orderBy={orderBy} handleOrderBy={handleOrderBy} />
                <SortFilter sort={sort} handleSort={handleSort} />
              </>
            }
          />
          {isLoadingSearch ? <LoadingList /> : <AnimeList items={searchList?.data} />}
          <Pagination animes={searchList} page={page} handlePage={handlePage} />
        </div>
      )}
    </section>
  );
}

export default SearchPage;
