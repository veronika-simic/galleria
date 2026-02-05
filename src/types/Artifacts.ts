export interface ArtifactInterface {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
}

export type ArtifactProps = {
  artifact: ArtifactInterface;
  loading: boolean;
};
