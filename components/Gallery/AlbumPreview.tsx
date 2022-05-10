import { useState } from "react";
import { AlbumPreviewStyle, AlbumName } from "./styles";

interface IProps {
  albumName: string;
}
const AlbumPreview = ({ albumName }: IProps) => {
  const [previewAlbum, setPreviewAlbum] = useState(false);
  // console.log(previewAlbum);
  return (
    <AlbumPreviewStyle
      onMouseEnter={() => setPreviewAlbum(true)}
      onMouseLeave={() => setPreviewAlbum(false)}
      onClick={() => setPreviewAlbum((state) => !state)}
    >
      <AlbumName previewAlbum={previewAlbum}>{albumName}</AlbumName>
    </AlbumPreviewStyle>
  );
};

export default AlbumPreview;
