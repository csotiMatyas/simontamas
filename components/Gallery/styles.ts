import styled, { css, keyframes } from "styled-components";

interface IAlbumName {
  previewAlbum: boolean;
}

interface IPreviewWindow {
  previewAlbum: boolean;
}

export const GalleryContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageStyle = styled.img`
  height: 200px;
  margin-right: 20px;
  :last-child {
    margin-right: 0px;
  }
`;

export const PreviewWindow = styled.div<IPreviewWindow>`
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${(props) => {
    if (props.previewAlbum) {
      return css`
        ${openPreview} 0.3s linear forwards
      `;
    }
    // if (!props.previewAlbum) {
    //   return css`
    //     ${closePreview} 0.3s linear forwards
    //   `;
    // }
  }};
  width: fit-content;
  overflow: hidden;
  height: 210px;
  display: ${(props) => (props.previewAlbum ? "block" : "none")};
  margin-bottom: 50px;
  border: 5px solid var(--theme-highlight);
  /* @media (max-width: ) {
    
  } */
`;

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
  margin-bottom: -5px;
`;
export const AlbumNameStyle = styled.h4<IAlbumName>`
  /* width: min-content; */
  padding: 10px 0;
  height: min-content;
  position: relative;
  color: white;
  /* color: ${(props) =>
    props.previewAlbum ? "var(--theme-highlight)" : "white"}; */
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

const openPreview = keyframes`
0% {
  transform: translateY(-20px);
  opacity: 0;
}
90% {
  opacity: 0.5;
}
100% {
  opacity: 1;
  visibility: visible
}
`;

const closePreview = keyframes`
0% {
  opacity: 1;
  visibility: visible
}
10% {
  opacity: 0.8;
}
100% {
  transform: translateY(20px);
  opacity: 0;
}
`;
