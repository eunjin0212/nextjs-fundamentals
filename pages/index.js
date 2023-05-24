import MovieItem from "@/components/MovieItem";
// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter()
  const onClick = (movie) => {
    router.push({
      pathname: `/movies/${movie.id}`,
      query: {
        id: movie.id,
        title: movie.title,
        img: movie.poster_path,
      },
    }, `/movies/${movie.id}`)
  }
  return (
    <div className='container'>
      {results?.map((movie) => (
        // <Link href={{
        //   pathname: `/movies/${movie.id}`,
        //   query: {
        //     id: movie.id,
        //     title: movie.title,
        //     img: movie.poster_path,
        //   },
        // }} key={movie.id} as={`movies/${movie.id}`}>
          <MovieItem movie={movie} key={movie.id} onClick={() => onClick(movie)} />
        // </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
