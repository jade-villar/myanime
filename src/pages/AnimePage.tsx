import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAnime, getAnimeRecommenations } from "../services/jikan";
import { useToast } from "../hooks/useToast";
import AnimePageHeader from "../components/AnimePage/AnimePageHeader";
import AnimePageBody from "../components/AnimePage/AnimePageBody";
import Modal from "../components/Modal/Modal";
import Toast from "../components/Toast/Toast";
import handleError from "../utils/handleError";
import "./AnimePage.css";

function AnimePage({ myList, user }) {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { toast, showToast } = useToast();

  const myListItem = user
    ? myList.find((item) => item.mal_id.toString() === id)
    : null;

  useEffect(() => {
    async function load() {
      try {
        setAnime(null);
        setIsLoading(true);
        const response = await getAnime(Number(id));
        setAnime(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [id, showToast]);

  useEffect(() => {
    async function load() {
      try {
        setRecommendations([]);
        const response = await getAnimeRecommenations(Number(id));
        setRecommendations(response);
      } catch (err) {
        console.log(err);
        handleError(err, showToast);
      }
    }

    load();
  }, [id, showToast]);

  return (
    <main className="anime-page">
      <AnimePageHeader
        anime={anime}
        myListItem={myListItem}
        user={user}
        setIsOpen={setIsOpen}
        isLoading={isLoading}
      />

      <AnimePageBody
        anime={anime}
        recommendations={recommendations}
        myListItem={myListItem}
        setIsOpen={setIsOpen}
      />

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          myListItem={myListItem}
          myStatus={myListItem.myStatus}
          myScore={myListItem.myScore}
          user={user}
        />
      )}

      {toast && <Toast message={toast.message} />}

      <section className="anime-page__bg"></section>
    </main>
  );
}

export default AnimePage;
