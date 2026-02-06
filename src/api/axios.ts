import axios from 'axios';
import { ArtifactInterface } from '../types/Artifacts';
import { getImageUrl } from '../utils/getImage';

const BASE = 'https://api.artic.edu/api/v1/artworks';

export async function getDataById(id: string | undefined) {
  if (!id) return null;
  const response = await axios.get(`${BASE}/${id}`);
  return response.data.data;
}

async function imageExists(url: string): Promise<boolean> {
  try {
    await axios.head(url);
    return true;
  } catch {
    return false;
  }
}

export async function getData(limit = 100): Promise<ArtifactInterface[]> {
  let page = 1;
  const valid: ArtifactInterface[] = [];

  while (valid.length < limit) {
    const response = await axios.get(`${BASE}?page=${page}&limit=100`);

    const candidates = response.data.data.filter(
      (a: ArtifactInterface) => a.image_id
    );

    for (const artifact of candidates) {
      const imageUrl = getImageUrl(artifact.image_id, 600);

      if (await imageExists(imageUrl)) {
        valid.push(artifact);
      }

      if (valid.length >= limit) break;
    }

    page++;
  }

  return valid.slice(0, limit);
}
