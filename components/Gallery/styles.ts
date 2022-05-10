import styled, { css, keyframes } from "styled-components";

interface IAlbumName {
  previewAlbum: boolean;
}

export const GalleryStyle = styled.main`
  width: 100%;
  height: 100%;
  padding: 0px 50px;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AlbumPreviewStyle = styled.div`
  width: fit-content;
  cursor: pointer;
`;
export const AlbumName = styled.h4<IAlbumName>`
  position: relative;
  color: ${(props) =>
    props.previewAlbum ? "var(--theme-highlight)" : "white"};
  font-family: "Space Mono", monospace;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: capitalize;
  font-size: 35px;
  transition: all 0.5s;
  transform: ${(props) => props.previewAlbum && "translateX(40px)"};
  ${(props) =>
    props.previewAlbum &&
    css`
      :before {
        content: "";
        position: absolute;
        opacity: 0;
        transform: translateY(-50%);
        top: 50%;
        animation: ${reveal} 0.3s forwards;
        left: -40px;
        width: 20px;
        height: 5px;
        background-color: var(--theme-highlight);
      }
    `}
`;

const reveal = keyframes`
  70% {opacity: 0}
  100% {opacity: 1}
`;
