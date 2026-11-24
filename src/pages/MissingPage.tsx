import { useNavigate } from "react-router";
import "./MissingPage.css";

function MissingPage() {
  const navigate = useNavigate();

  return (
    <main className="missing-page">
      <h1 className="missing-page__message">Page not Found</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </main>
  );
}

export default MissingPage;
