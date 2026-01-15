import { useEffect, useState } from "react";
import RelationCard from "../Cards/RelationCard";
import "./AnimeRelations.css";

function AnimeRelations({ anime }) {
  const [relations, setRelations] = useState([]);

  useEffect(() => {
    const filteredRelations = anime?.data?.relations.filter(
      (item) =>
        item.relation !== "Adaptation" &&
        item.relation !== "Other" &&
        item.relation !== "Summary"
    );
    setRelations(filteredRelations);
  }, [anime]);

  return (
    <div className="anime-page__relations">
      <b className="anime-page__relations-label">Related entries:</b>
      {relations?.length ? (
        <div className="anime-page__relations-grid">
          {relations?.map((relation) =>
            relation.entry.map((anime) => (
              <RelationCard
                anime={anime}
                relation={relation}
                key={anime.mal_id}
              />
            ))
          )}
        </div>
      ) : (
        <p className="anime-page__empty">No related entries</p>
      )}
    </div>
  );
}

export default AnimeRelations;
