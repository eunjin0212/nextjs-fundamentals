export default function Detail({ results, params }) {
  const [title, id] = params || []
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
        alt={title}
      />
      <strong>{title}</strong>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const results = await (
    await fetch(`http://localhost:3000/api/movies/${502356}`)
  ).json();
  return {
    props: {
      results,
      params
    },
  };
}

