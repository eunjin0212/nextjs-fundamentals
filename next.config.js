/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'] // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
  async redirects() {
    return [
      {
        source: '/contact/:path*', // 가려는 곳
        destination: '/form/:path*', // 보내는 곳
        permanent: false, // 브라우저가 기억하는지
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies', // masking 할 수 있음
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
