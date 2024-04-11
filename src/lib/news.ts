import { Article, News } from "../typings";

function filterNews(news: News) {
    const filteredNews = news.articles.filter((article: Article) => article.title != '[Removed]').filter((article: Article) => article.urlToImage)
    return filteredNews
}

export const fetchNews= async (search: String) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${process.env.API_KEY}`).then(
        res => {return res.json()}
    ).catch(err => console.log(err))
    if(response.status === 'error'){
        return {}
    } else {
        const transformedData = filterNews(response)
        return {
                    status: response.status,
                    totalResults: response.totalResults,
                    articles: transformedData
                }
    }
}