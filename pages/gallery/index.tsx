import GalleryMain from "components/Gallery/Gallery";
import ImageShowcase from "components/ImageShowcase/ImageShowcase";
import { BackgroundFilterStyle } from "components/ImageShowcase/styles";
import type { NextPage } from "next";
import Head from "next/head";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Tamás - Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GalleryMain />
      <BackgroundFilterStyle>
        <ImageShowcase />
      </BackgroundFilterStyle>
    </>
  );
};

export default Gallery;
