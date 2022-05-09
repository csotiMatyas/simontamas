import styled, { keyframes, css } from "styled-components";
import { Menu } from "./Navigation";

interface IMenuRows {
  open: boolean;
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
  background-color: white;
  border-radius: 1px;
  transform-origin: left;
`;

export const MenuStyleTop = styled(MenuRows)`
  animation: ${(props) =>
    props.open
      ? css`
          ${rotateTop} 0.2s ease-out forwards
        `
      : css`
          ${rotateTopClose} 0.2s ease-out forwards
        `};
`;

export const MenuStyleMiddle = styled(MenuRows)`
  animation: ${(props) =>
    props.open &&
    css`
      ${fade} 0.2s ease-out forwards
    `};
`;

export const MenuStyleBottom = styled(MenuRows)`
  animation: ${(props) =>
    props.open
      ? css`
          ${rotateBottom} 0.2s ease-out forwards
        `
      : css`
          ${rotateBottomClose} 0.2s ease-out forwards
        `};
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
