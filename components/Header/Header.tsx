import { HeaderStyles, Logo } from "./styles";
import Navigation from "components/Navigation/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const { pathname } = useRouter();
  const inAlbums = pathname.includes("/gallery/");

  return (
    <HeaderStyles>
      <Link href="/">
        <Logo inAlbums={inAlbums}>Simon Tamas</Logo>
      </Link>
      <Navigation inAlbums={inAlbums} />
    </HeaderStyles>
  );
};

export default Header;
