import NewsList from "./components/NewsList";
import { News } from "../typings";
import { fetchNews } from "../lib/news";

export default async function Home() {

  const {articles, status, totalResults}: News = await fetchNews()

  return (
    <main>
      <NewsList articles={articles} status={status} totalResults={totalResults}/>      
    </main>
  );
}
