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
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<Menu>("default");
  // console.log(open);
  return (
    <NavStyle
      onClick={() => {
        if (!open) {
          setOpen(true);
          setMenu("opened");
        }
        if (open) {
          setOpen(false);
          setMenu("closed");
        }
      }}
    >
      <MenuStyleTop menu={menu} open={open} />
      <MenuStyleMiddle menu={menu} open={open} />
      <MenuStyleBottom menu={menu} open={open} />
    </NavStyle>
  );
};

export default Navigation;
