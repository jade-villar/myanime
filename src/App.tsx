import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router";
import { getAnimeSearch, getTopRatedAnimes, getTopPopularAnimes, getSeasonNow, getSeasonAnimes } from "./services/jikan";
import { useAuth } from "./hooks/useAuth";
import { useToast } from "./hooks/useToast";
import { handleGetMyList } from "./services/myList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import AnimePage from "./pages/AnimePage";
import TopRatedPage from "./pages/TopRatedPage";
import AiringPage from "./pages/AiringPage";
import SeasonPage from "./pages/SeasonPage";
import TopPopularPage from "./pages/TopPopularPage";
import ProducerPage from "./pages/ProducerPage";
import MyListPage from "./pages/MyListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MissingPage from "./pages/MissingPage";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import getSeason from "./utils/getSeason";
import handleError from "./utils/handleError";
import "./App.css";

function App() {
  const { user } = useAuth();

  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [topRatedAnimes, setTopRatedAnimes] = useState([]);
  const [airingAnimes, setAiringAnimes] = useState([]);
  const [seasonAnimes, setSeasonAnimes] = useState([]);
  const [topPopularAnimes, setTopPopularAnimes] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const startDate = searchParams.get("start_date") || "";
  const endDate = searchParams.get("end_date") || "";
  const year = searchParams.get("year") || getSeason().next.year;
  const season = searchParams.get("season") || getSeason().next.season;
  const type = searchParams.get("type") || "";
  const genre = searchParams.get("genre") || "";
  const orderByScore = searchParams.get("order_by") || "score";
  const orderByPopularity = searchParams.get("order_by") || "popularity";
  const sortDesc = searchParams.get("sort") || "desc";
  const sortAsc = searchParams.get("sort") || "asc";
  const page = searchParams.get("page") || 1;

  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingTopRated, setIsLoadingTopRated] = useState(false);
  const [isLoadingAiring, setIsLoadingAiring] = useState(false);
  const [isLoadingSeason, setIsLoadingSeason] = useState(false);
  const [isLoadingTopPopular, setIsLoadingTopPopular] = useState(false);

  const { toast, showToast } = useToast();

  useEffect(() => {
    getSeason();
  }, []);

  useEffect(() => {
    if (!user) {
      setMyList([]);
      return;
    }

    const unsub = handleGetMyList(user.uid, setMyList);
    return () => unsub();
  }, [user]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoadingSearch(true);
        const response = await getAnimeSearch({
          query,
          type,
          orderByPopularity,
          sortAsc,
          page,
        });
        setSearchList(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoadingSearch(false);
      }
    }

    load();
  }, [query, type, orderByPopularity, sortAsc, page, showToast]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoadingTopRated(true);
        const response = await getTopRatedAnimes({
          type,
          genre,
          sortDesc,
          page,
        });
        setTopRatedAnimes(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoadingTopRated(false);
      }
    }

    load();
  }, [type, genre, sortDesc, page, showToast]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoadingAiring(true);
        const response = await getSeasonNow({ type, page });
        setAiringAnimes(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoadingAiring(false);
      }
    }

    load();
  }, [type, page, showToast]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoadingSeason(true);
        const response = await getSeasonAnimes({ year, season, type, page });
        setSeasonAnimes(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoadingSeason(false);
      }
    }

    load();
  }, [type, year, season, page, showToast]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoadingTopPopular(true);
        const response = await getTopPopularAnimes({
          startDate,
          endDate,
          type,
          genre,
          sortAsc,
          page,
        });
        setTopPopularAnimes(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoadingTopPopular(false);
      }
    }

    load();
  }, [type, genre, sortAsc, startDate, endDate, page, showToast]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              topRatedAnimes={topRatedAnimes}
              airingAnimes={airingAnimes}
              seasonAnimes={seasonAnimes}
              topPopularAnimes={topPopularAnimes}
              isLoadingTopRated={isLoadingTopRated}
              isLoadingAiring={isLoadingAiring}
              isLoadingSeason={isLoadingSeason}
              isLoadingTopPopular={isLoadingTopPopular}
              toast={toast}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              searchList={searchList}
              setSearchParams={setSearchParams}
              query={query}
              type={type}
              orderBy={orderByPopularity}
              sort={sortAsc}
              page={page}
              isLoadingSearch={isLoadingSearch}
              toast={toast}
            />
          }
        />
        <Route
          path="/anime/:id"
          element={<AnimePage myList={myList} user={user} />}
        />
        <Route
          path="/top-rated"
          element={
            <TopRatedPage
              topRatedAnimes={topRatedAnimes}
              setSearchParams={setSearchParams}
              type={type}
              genre={genre}
              sort={sortDesc}
              page={page}
              isLoadingTopRated={isLoadingTopRated}
              toast={toast}
            />
          }
        />
        <Route
          path="/airing"
          element={
            <AiringPage
              airingAnimes={airingAnimes}
              setSearchParams={setSearchParams}
              type={type}
              page={page}
              isLoadingAiring={isLoadingAiring}
              toast={toast}
            />
          }
        />
        <Route
          path="/animes"
          element={
            <SeasonPage
              seasonAnimes={seasonAnimes}
              setSearchParams={setSearchParams}
              year={year}
              season={season}
              type={type}
              page={page}
              isLoadingSeason={isLoadingSeason}
              toast={toast}
            />
          }
        />
        <Route
          path="/popular"
          element={
            <TopPopularPage
              topPopularAnimes={topPopularAnimes}
              setSearchParams={setSearchParams}
              startDate={startDate}
              endDate={endDate}
              type={type}
              genre={genre}
              sort={sortAsc}
              page={page}
              isLoadingTopPopular={isLoadingTopPopular}
              toast={toast}
            />
          }
        />
        <Route
          path="/producer/:id"
          element={
            <ProducerPage
              setSearchParams={setSearchParams}
              type={type}
              genre={genre}
              orderBy={orderByScore}
              sort={sortDesc}
              page={page}
            />
          }
        />
        <Route
          path="/my-list"
          element={
            <ProtectedRoute>
              <MyListPage myList={myList} user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
