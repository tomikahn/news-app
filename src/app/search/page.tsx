import { fetchNews } from "@/src/lib/news"
import NewsList from "../components/NewsList"
import { News } from "@/src/typings"
import NotFound from "../not-found"

async function SearchPage({ searchParams }:{ searchParams:{ search: string}}) {
  const {articles, status, totalResults}: News = await fetchNews(searchParams.search)
    if (articles.length === 0) { 
      return NotFound() }

    return (
        <NewsList articles={articles} status={status} totalResults={totalResults}/>
  )
}

export default SearchPage