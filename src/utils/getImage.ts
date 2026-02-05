export function getImageUrl(imageId: string, width = 843) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`;
}
