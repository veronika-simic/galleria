import axios from 'axios';

const BASE = 'https://api.artic.edu/api/v1/artworks';

export async function getDataById(id: string | undefined) {
  if (!id) return null;
  const response = await axios.get(`${BASE}/${id}`);
  return response.data.data;
}

export async function getData(limit = 100) {
  const response = await axios.get(`${BASE}?page=1&limit=${limit}`);
  return response.data.data;
}
