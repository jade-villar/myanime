import ContentHeader from "../components/PageContent/ContentHeader";
import AnimeMyList from "../components/PageContent/AnimeMyList";
import "./MyListPage.css";

function MyListPage({ myList, user }) {
  return (
    <main className="my-list-page">
      <ContentHeader title="My List" />
      <AnimeMyList items={myList} user={user} />
    </main>
  );
}

export default MyListPage;
