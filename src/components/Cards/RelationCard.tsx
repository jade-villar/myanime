import { Link } from "react-router";
import capitalize from "../../utils/capitalize";
import "./RelationCard.css";

function RelationCard({ anime, relation }) {
  return (
    <div className="relation-card" title={anime.name}>
      <Link className="relation-card__link" to={`/anime/${anime.mal_id}`}>
        <p className="relation-card__relation-type">
          {`${relation.relation} - ${capitalize(anime.type)}`}
        </p>
        <p className="relation-card__name">{anime.name}</p>
      </Link>
    </div>
  );
}

export default RelationCard;
