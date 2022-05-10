import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";
import {
  NavStyle,
  MenuStyleTop,
  MenuStyleBottom,
  MenuStyleMiddle,
  MenuIcon,
} from "./styles";

export type Menu = "default" | "opened" | "closed" | "fastClosed";

function menuControll(state: Menu, setter: Dispatch<SetStateAction<Menu>>) {
  if (state !== "opened") {
    setter("opened");
  }
  if (state === "opened") {
    setter("closed");
  }
}
const Navigation = () => {
  const [menu, setMenu] = useState<Menu>("default");

  return (
    <NavStyle>
      <MenuIcon onClick={() => menuControll(menu, setMenu)}>
        <MenuStyleTop menu={menu} />
        <MenuStyleMiddle menu={menu} />
        <MenuStyleBottom menu={menu} />
      </MenuIcon>
      <DropdownMenu setMenu={setMenu} menu={menu} />
    </NavStyle>
  );
};

export default Navigation;
