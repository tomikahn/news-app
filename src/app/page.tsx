import NewsList from "./components/NewsList";
import { News } from "../typings";
import { fetchNews } from "../lib/news";
import NotFound from "./not-found";

export default async function Home() {

  const {articles, status, totalResults}: News = await fetchNews()

  return (
    <main>
     { articles && status !== 'error' ? (
      <NewsList articles={articles} status={status} totalResults={totalResults}/>      
    ) : (
        <NotFound/>
      )}
    </main>
  );
}
