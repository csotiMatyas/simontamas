import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutStyle } from "components/Layout/styles";
import Header from "components/Header/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-highlight: #DDA71B;
    --theme-background: #111620;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutStyle>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </LayoutStyle>
  );
}

export default MyApp;
