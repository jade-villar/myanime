import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducer, getProducerAnimes } from "../services/jikan";
import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeGrid from "../components/PageContent/AnimeGrid";
import Pagination from "../components/PageContent/Pagination";
import TypeFilter from "../components/Filters/TypeFilter";
import GenreFilter from "../components/Filters/GenreFilter";
import OrderByFilter from "../components/Filters/OrderByFilter";
import SortFilter from "../components/Filters/SortFilter";
import LoadingGrid from "../components/Loading/LoadingGrid";
import "./ProducerPage.css";

function ProducerPage({ setSearchParams, type, genre, orderBy, sort, page }) {
  const { id } = useParams();
  const [producer, setProducer] = useState(null);
  const [producerAnimes, setProducerAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setProducer(null);
        const response = await getProducer(id);
        setProducer(response);
      } catch (err) {
        console.log(err);
      }
    }

    load();
  }, [id]);

  useEffect(() => {
    async function load() {
      try {
        setProducerAnimes([]);
        setIsLoading(true);
        const response = await getProducerAnimes({ id, type, genre, orderBy, sort, page });
        setProducerAnimes(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [id, type, genre, orderBy, sort, page]);

  function handleType(newType) {
    setSearchParams({
      type: newType,
      genre: genre,
      order_by: orderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleGenre(newGenre) {
    setSearchParams({
      type: type,
      genre: newGenre.join(","),
      order_by: orderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleOrderBy(newOrderBy) {
    setSearchParams({
      type: type,
      genre: genre,
      order_by: newOrderBy,
      sort: sort,
      page: 1,
    });
  }

  function handleSort(newSort) {
    setSearchParams({
      type: type,
      genre: genre,
      order_by: orderBy,
      sort: newSort,
      page: 1,
    });
  }

  function handlePage(newPage) {
    setSearchParams({
      type: type,
      genre: genre,
      order_by: orderBy,
      sort: sort,
      page: newPage,
    });
  }

  return (
    <main className="producer-page">
      <section className="producer">
        <figure className="producer__brand">
          <img className="producer__brand-image" src={producer?.data?.images?.jpg?.image_url} />
        </figure>
        <p className="producer__name">{producer?.data?.titles[0]?.title}</p>
      </section>
      <section className="producer-titles">
        <ContentHeader
          title="Titles"
          filters={
            <>
              <TypeFilter type={type} handleType={handleType} />
              <GenreFilter genre={genre} handleGenre={handleGenre} />
              <OrderByFilter orderBy={orderBy} handleOrderBy={handleOrderBy} />
              <SortFilter sort={sort} handleSort={handleSort} />
            </>
          }
        />
        {isLoading ? <LoadingGrid /> : <AnimeGrid items={producerAnimes?.data} />}
        <Pagination animes={producerAnimes} page={page} handlePage={handlePage} />
      </section>
    </main>
  );
}

export default ProducerPage;
