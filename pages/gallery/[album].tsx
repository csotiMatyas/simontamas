import ImageShowcase from "components/ImageShowcase/ImageShowcase";
import { BackgroundFilterStyle } from "components/ImageShowcase/styles";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Album: NextPage = () => {
  const {
    query: { album },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Simon Tamás - {album}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default Album;
