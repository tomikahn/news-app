/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"
import "../styles/card.css"
import { Article, ArticleCardProps } from "@/src/typings"

function ArticleCard({article}: ArticleCardProps) {

  const router = useRouter()

  const handleClick = () => {
    const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
    const url = `/article?${queryString}`
    router.push(url)
  }

    return (
    <div className='card' onClick={handleClick}>
        {article.urlToImage ? (<img
          className="card-image"
          src={article.urlToImage}
          alt={`image about ${article.title}`}
        />
) : (<></>)}
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <h3>By {article.author ? article.author : 'Unknown'}</h3>
      </div>
    </div>
  )
}

export default ArticleCard