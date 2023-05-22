import Head from "next/head";

export default function Seo({ title }) {
  const pageTitle = `${title} | Next Movies`
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}