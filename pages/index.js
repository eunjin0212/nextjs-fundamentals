import { useEffect, useState } from 'react'

const API_KEY = '3d85994113faadbad92f020ed39c18f4'

export default function Home() {
  const [movies, setMovies] = useState()
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json()
      setMovies(results)
    })()
  }, [])
  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          {movie.original_title}
        </div>
      ))}
    </div>
  )
}