import Hero from "../components/HomePage/Hero";
import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeGrid from "../components/PageContent/AnimeGrid";
import LoadingGrid from "../components/Loading/LoadingGrid";
import "./HomePage.css";

function HomePage({ topRatedAnimes, airingAnimes, seasonAnimes, topPopularAnimes, 
  isLoadingTopRated, isLoadingAiring, isLoadingSeason, isLoadingTopPopular,
}) {
  return (
    <main className="home-page">
      <section className="home-page__bg">
        <img className="home-page__bg-image" src="/myanime-bg.jpg" />
      </section>

      <Hero />

      <section className="home-page__content">
        <ContentHeader title="Top Rated" link="/top-rated" />
        {isLoadingTopRated ? <LoadingGrid /> : <AnimeGrid items={topRatedAnimes?.data} />}
      </section>

      <section className="home-page__content">
        <ContentHeader title="Airing this Season" link="/airing" />
        {isLoadingAiring ? <LoadingGrid /> : <AnimeGrid items={airingAnimes?.data} />}
      </section>

      <section className="home-page__content">
        <ContentHeader title="Upcoming Next Season" link="/animes" />
        {isLoadingSeason ? <LoadingGrid /> : <AnimeGrid items={seasonAnimes?.data} />}
      </section>

      <section className="home-page__content">
        <ContentHeader title="Popular All Time" link="/popular" />
        {isLoadingTopPopular ? <LoadingGrid /> : <AnimeGrid items={topPopularAnimes?.data} />}
      </section>
    </main>
  );
}

export default HomePage;
