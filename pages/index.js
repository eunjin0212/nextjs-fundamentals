import MovieItem from "@/components/MovieItem";

export default function Home({ results }) {
  return (
    <div className='container'>
      {results?.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
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
