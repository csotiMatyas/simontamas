import type { NextPage } from "next";
import Head from "next/head";
import { HeaderStyles, Logo } from "./styles";
import Navigation from "components/Navigation/Navigation";
import Link from "next/link";
const Header = () => {
  return (
    <HeaderStyles>
      <Link href="/">
        <Logo>Simon Tamas</Logo>
      </Link>
      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
