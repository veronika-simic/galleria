import { Image } from './Image';

export interface ArtifactModel {
  objectNumber: string;
  title: string;
  principalOrFirstMaker: string;
  longTitle: string;
  webImage: Image;
}
