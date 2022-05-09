import type { NextPage } from "next";
import Head from "next/head";
import { HeaderStyles, Logo } from "./styles";
import Navigation from "components/Navigation/Navigation";
const Header: NextPage = () => {
  return (
    <HeaderStyles>
      <Logo>Simon Tamas</Logo>
      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
