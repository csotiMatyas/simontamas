import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuLink } from "./styles";
import { useRouter } from "next/router";

interface IProps {
  name: string;
}
const DropDownMenuLink = ({ name }: IProps) => {
  const [selected, setSelected] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === `/${name}`) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [pathname]);

  return (
    <Link href={`/${name}`}>
      <MenuLink selected={selected}>{name}</MenuLink>
    </Link>
  );
};

export default DropDownMenuLink;
