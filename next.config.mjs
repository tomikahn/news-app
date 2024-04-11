/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL: "https://newsapi.org/v2/everything",
        API_KEY:process.env.API_KEY
    }
};

export default nextConfig;
