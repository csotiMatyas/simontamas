import styled from "styled-components";

interface IInAlbum {
  inAlbums: boolean;
}

export const HeaderStyles = styled.header`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
`;

export const Logo = styled.div<IInAlbum>`
  cursor: pointer;
  font-family: "Clash Display", sans-serif;
  color: ${(props) => (props.inAlbums ? "black" : "white")};
  font-size: 25px;
  height: 30px;
`;
