import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutStyle } from "components/Layout/styles";
import Header from "components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutStyle>
      <Header />
      <Component {...pageProps} />
    </LayoutStyle>
  );
}

export default MyApp;
