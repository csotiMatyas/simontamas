import AlbumPreview from "./AlbumPreview";
import { GalleryStyle, GalleryContainerStyle } from "./styles";

const GalleryMain = () => {
  return (
    <GalleryStyle>
      <GalleryContainerStyle>
        <AlbumPreview albumName="street" />
        <AlbumPreview albumName="portraits" />
        <AlbumPreview albumName="analogue" />
        <AlbumPreview albumName="black & white" />
        <AlbumPreview albumName="landscape" />
      </GalleryContainerStyle>
    </GalleryStyle>
  );
};

export default GalleryMain;
