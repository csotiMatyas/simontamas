import { ImageStyle, PreviewWindow } from "./styles";
import { useRouter } from "next/router";

interface IProps {
  previewAlbum: boolean;
  albumName: string;
  documentWidth: number;
}

export const AlbumPreviewWindow = ({
  previewAlbum,
  albumName,
  documentWidth,
}: IProps) => {
  const { push } = useRouter();

  return (
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
  );
};
