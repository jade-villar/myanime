import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAnime, getAnimeRecommenations } from "../services/jikan";
import AnimePageHeader from "../components/AnimePage/AnimePageHeader";
import AnimePageBody from "../components/AnimePage/AnimePageBody";
import Modal from "../components/Modal/Modal";
import "./AnimePage.css";

function AnimePage({ myList, user }) {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [id]);

  useEffect(() => {
    async function load() {
      try {
        setRecommendations([]);
        const response = await getAnimeRecommenations(Number(id));
        setRecommendations(response);
      } catch (err) {
        console.log(err);
      }
    }

    load();
  }, [id]);

  return (
    <main className="anime-page">
      <section className="anime-page__bg">
        <img className="anime-page__bg-image" src="/myanime-bg.jpg" />
      </section>

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
    </main>
  );
}

export default AnimePage;
