import { Image } from './Image';

export interface ArtifactModel {
  objectNumber: number;
  title: string;
  principalOrFirstMaker: string;
  longTitle: string;
  webImage: Image;
}
