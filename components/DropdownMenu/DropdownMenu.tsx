import { Menu } from "components/Navigation/Navigation";
import { Dispatch, SetStateAction } from "react";
import { DropdownMenuStyle, Links } from "./styles";
import DropDownMenuLink from "./DropdownMenuLink";

interface IProps {
  menu: Menu;
  setMenu: Dispatch<SetStateAction<Menu>>;
}

const links = ["gallery", "contact", "about", "prints"];
const DropdownMenu = ({ menu, setMenu }: IProps) => {
  return (
    <DropdownMenuStyle menu={menu}>
      <Links onClick={() => setMenu("fastClosed")}>
        {links.map((link) => (
          <DropDownMenuLink key={link} name={link} />
        ))}
      </Links>
    </DropdownMenuStyle>
  );
};

export default DropdownMenu;
