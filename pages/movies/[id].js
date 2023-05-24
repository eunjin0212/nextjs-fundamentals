import { useRouter } from 'next/router';

export default function Detail({ results }) {
  const router = useRouter()
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${router.query.img}`}
        alt={router.query.title}
      />
      <strong>{router.query.title}</strong>
    </div>
  );
}

export async function getServerSideProps() {
  const results = await (
    await fetch(`http://localhost:3000/api/movies/${502356}`)
  ).json();
  return {
    props: {
      results
    },
  };
}

