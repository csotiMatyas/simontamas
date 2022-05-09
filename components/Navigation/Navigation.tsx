import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  NavStyle,
  MenuStyleTop,
  MenuStyleBottom,
  MenuStyleMiddle,
} from "./styles";

export type Menu = "default" | "opened" | "closed";

const Navigation: NextPage = () => {
  const [menu, setMenu] = useState<Menu>("default");
  // console.log(open);
  return (
    <NavStyle
      onClick={() => {
        if (menu !== "opened") {
          setMenu("opened");
        }
        if (menu === "opened") {
          setMenu("closed");
        }
      }}
    >
      <MenuStyleTop menu={menu} />
      <MenuStyleMiddle menu={menu} />
      <MenuStyleBottom menu={menu} />
    </NavStyle>
  );
};

export default Navigation;
