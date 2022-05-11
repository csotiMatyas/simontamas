import { Menu } from "components/Navigation/Navigation";
import styled, { keyframes, css } from "styled-components";

export interface IMenuRows {
  menu: Menu;
}

export interface IMenuLink {
  selected: boolean;
}

export const DropdownMenuStyle = styled.div<IMenuRows>`
  background-color: var(--theme-background);
  height: 100vh;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: -250px;
  top: -20px;
  position: absolute;
  animation: ${(props) => {
    if (props.menu === "opened") {
      return css`
        ${openAnimation} 0.5s cubic-bezier(.04,.93,.36,.95) forwards
      `;
    }
    if (props.menu === "closed") {
      return css`
        ${closeAnimation} 0.5s cubic-bezier(.04,.93,.36,.95) forwards
      `;
    }
    if (props.menu === "fastClosed") {
      return css`
        ${closeAnimation} 0.1s cubic-bezier(.29,.09,.57,.25) forwards
      `;
    }
  }};
`;

export const MenuLink = styled.p<IMenuLink>`
  &:after {
    content: "";
    margin-left: -0.2rem;
  }
  cursor: pointer;
  color: ${(props) => (props.selected ? "var(--theme-highlight)" : "white")};
  text-transform: uppercase;
  font-family: "Space Mono", monospace;
  font-size: 20px;
  letter-spacing: 0.2rem;
  width: min-content;
  padding: 22px 0;
  &:hover {
    color: var(--theme-highlight);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 20%;
`;

const openAnimation = keyframes`
  from {
    display: hidden;
    /* right: -100px; */
  }
  to {
    display: flex;
    right: -20px
  }
`;

const closeAnimation = keyframes`
  from {
    display: flex;
    right: -20px
  }
  to {
    display: hidden;
    /* right: -100px; */
  }
`;
