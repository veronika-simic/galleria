import axios from 'axios';
import { ArtifactInterface } from '../types/Artifacts';

const BASE = 'https://api.artic.edu/api/v1/artworks';

export async function getDataById(id: string | undefined) {
  if (!id) return null;
  const response = await axios.get(`${BASE}/${id}`);
  return response.data.data;
}

export async function getData(limit = 100): Promise<ArtifactInterface[]> {
  const response = await axios.get(`${BASE}?page=1&limit=${limit}`);

  const filtered = response.data.data.filter(
    (artifact: ArtifactInterface) =>
      typeof artifact.image_id === 'string' &&
      artifact.image_id.trim().length > 0
  );

  return filtered.slice(0, limit);
}
