import styled from "styled-components";

export const ImageStyle = styled.img`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  object-fit: contain;
  transform: translateY(-15%);
`;
export const Carrousel = styled.div`
  position: absolute;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100vw;
`;

export const BackgroundFilterStyle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
