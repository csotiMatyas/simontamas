import AlbumPreview from "./AlbumPreview";
import { GalleryStyle } from "./styles";

const GalleryMain = () => {
  return (
    <GalleryStyle>
      <AlbumPreview albumName="street" />
      <AlbumPreview albumName="portraits" />
      <AlbumPreview albumName="analogue" />
      <AlbumPreview albumName="black & white" />
      <AlbumPreview albumName="lanscape" />
    </GalleryStyle>
  );
};

export default GalleryMain;
