import { Article, News } from "../typings";

function filterNews(news: News) {
    const filteredNews = news.articles.filter((article: Article) => article.title !== '[Removed]').filter((article: Article) => article.urlToImage);
    return filteredNews;
}

export const fetchNews = async (search?: string) => {
    try {
        const response = await fetch(`${process.env.API_URL}?q=${search}&sortBy=popularity&apiKey=${process.env.API_KEY}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        
        const responseData = await response.json();

        if (responseData.status === 'error' || !responseData.articles || responseData.articles.length === 0) {
            return {
                status: responseData.status || 'error',
                totalResults: responseData.totalResults || 0,
                articles: []
            };
        } else {
            const transformedData = filterNews(responseData);
            return {
                status: responseData.status,
                totalResults: responseData.totalResults,
                articles: transformedData
            };
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        return {
            status: 'error',
            totalResults: 0,
            articles: []
        };
    }
};
