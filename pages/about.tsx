import ImageShowcase from "components/ImageShowcase/ImageShowcase";
import { BackgroundFilterStyle } from "components/ImageShowcase/styles";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Tamás - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackgroundFilterStyle>
        <ImageShowcase />
      </BackgroundFilterStyle>
    </>
  );
};

export default About;
