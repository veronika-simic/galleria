import { Classification } from './Classification';
import { Image } from './Image';

export interface ArtifactData {
  objectNumber: string;
  title: string;
  webImage: Image;
  description: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  materials: string[];
  productionPlaces: string[];
  classification: Classification;
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
}
