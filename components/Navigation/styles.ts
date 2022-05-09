import styled, { keyframes, css } from "styled-components";
import { Menu } from "./Navigation";

interface IMenuRows {
  menu: Menu;
}

export const NavStyle = styled.nav`
  width: 40px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuRows = styled.div<IMenuRows>`
  width: 40px;
  height: 3px;
  border-radius: 1px;
  transform-origin: left;
  background-color: ${(props) =>
    props.menu === "opened" ? "var(--theme-primary)" : "white"};
`;

export const MenuStyleTop = styled(MenuRows)`
  animation: ${(props) => {
    if (props.menu === "opened") {
      return css`
        ${rotateTop} 0.2s ease-out forwards
      `;
    }
    if (props.menu === "closed") {
      return css`
        ${rotateTopClose} 0.2s ease-out forwards
      `;
    }
  }};
`;

export const MenuStyleMiddle = styled(MenuRows)`
  animation: ${(props) =>
    props.menu === "opened" &&
    css`
      ${fade} 0.2s ease-out forwards
    `};
`;

export const MenuStyleBottom = styled(MenuRows)`
  animation: ${(props) => {
    if (props.menu === "opened") {
      return css`
        ${rotateBottom} 0.2s ease-out forwards
      `;
    }
    if (props.menu === "closed") {
      return css`
        ${rotateBottomClose} 0.2s ease-out forwards
      `;
    }
  }};
`;

const fade = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`;

const rotateTopClose = keyframes`
  from{transform: rotate(25deg)}
  to{transform: rotate(0deg)}`;

const rotateTop = keyframes`
  from{transform: rotate(0deg)}
  to{transform: rotate(25deg)}`;

const rotateBottomClose = keyframes`
  from{transform: rotate(-25deg)}
  to{transform: rotate(0deg)}`;

const rotateBottom = keyframes`
  from{transform: rotate(0deg)}
  to{transform: rotate(-25deg)}`;
