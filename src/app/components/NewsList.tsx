import { Article, News } from "@/src/typings";
import ArticleCard from "./ArticleCard";
import "../styles/articles.css"
import NotFound from "../not-found";

function NewsList({articles}: News) {

  if (!articles) {
    return NotFound()
  }

  return (
    <section className="articles-container articles-section">
        {articles && articles.map((art: Article) => {
          return (
            <ArticleCard key={art.title} article={art}/>
          )
        })}
      </section>
  )
}

export default NewsList