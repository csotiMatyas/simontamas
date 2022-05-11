import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AlbumPreviewStyle,
  AlbumNameStyle,
  PreviewWindow,
  ImageStyle,
} from "./styles";

interface IProps {
  albumName:
    | "portraits"
    | "landscape"
    | "street"
    | "black & white"
    | "analogue";
}

const AlbumPreview = ({ albumName }: IProps) => {
  const [previewAlbum, setPreviewAlbum] = useState(false);
  const [documentWidth, setDocumentWidth] = useState(0);
  const { push } = useRouter();
  useEffect(() => {
    setDocumentWidth(document.body.clientWidth);
    window.addEventListener("resize", () =>
      setDocumentWidth(window.document.body.clientWidth)
    );
  }, []);
  // if (typeof window !== "undefined") {
  // }

  return (
    <AlbumPreviewStyle
      onMouseEnter={() => {
        setPreviewAlbum(true);
      }}
      onMouseLeave={() => setPreviewAlbum(false)}
    >
      <AlbumNameStyle
        // onClick={() => setPreviewAlbum((state) => !state)}
        previewAlbum={previewAlbum}
      >
        {albumName}
      </AlbumNameStyle>
      <PreviewWindow
        previewAlbum={previewAlbum}
        onClick={() => push(`/gallery/${albumName}`)}
      >
        <ImageStyle src={`images/${albumName}/${1}.jpg`} alt={albumName} />
        {documentWidth >= 730 && (
          <ImageStyle src={`images/${albumName}/${2}.jpg`} alt={albumName} />
        )}
        {documentWidth >= 1048 && (
          <ImageStyle src={`images/${albumName}/${3}.jpg`} alt={albumName} />
        )}
        {albumName === "portraits" && documentWidth >= 1048 && (
          <ImageStyle src={`images/${albumName}/${4}.jpg`} alt={albumName} />
        )}
      </PreviewWindow>
    </AlbumPreviewStyle>
  );
};

export default AlbumPreview;
