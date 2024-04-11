/* eslint-disable @next/next/no-img-element */
import { Article } from "@/src/typings"
import { Metadata } from "next";
import "../styles/mainCard.css"
import NotFound from "../not-found";

export async function generateMetadata(
  { searchParams }: {searchParams: Article}
): Promise<Metadata> {
  return {
    title: `Article | ${searchParams.title}` ,
    description:searchParams.description,
    openGraph: {
      images: searchParams.urlToImage
    },
  }
}


function ArticlePage({searchParams}: {searchParams: Article}) {

  if (!searchParams.title) {
    return NotFound()
  }

  const article = searchParams
  return (
    <article className="main-card-container">
      <h1 className="article-title">{article.title}</h1>
      <img className="main-card-image" src={article.urlToImage} alt={article.title} />
      <div className="info-container">
        <p className="article-description">{article.description}</p>
          <>{article.author != "null" ? ( <h3 className="article-author">By {article.author}</h3>
          ) : (<h3 className="article-author">By Unknown </h3>)}</>
      </div>
    </article>
  )
}

export default ArticlePage