import ImageShowcase from "components/ImageShowcase/ImageShowcase";
import { BackgroundFilterStyle } from "components/ImageShowcase/styles";
import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Tamás - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackgroundFilterStyle>
        <ImageShowcase />
      </BackgroundFilterStyle>
    </>
  );
};

export default Contact;
