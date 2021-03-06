import ImageShowcase from "components/ImageShowcase/ImageShowcase";
import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Tamás</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ImageShowcase />
    </>
  );
};

export default Home;
