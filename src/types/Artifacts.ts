import { Image } from './Image';

export interface ArtifactModel {
  id: number;
  title: string;
  artist_title: string;
  longTitle: string;
  webImage: Image;
}
