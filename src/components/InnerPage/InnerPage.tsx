import { useLoaderData } from 'react-router-dom';
import { getDataById } from '../api/axios';

export async function loader(params: any) {
  const artifactId = await getDataById(params.artifactId);
  return artifactId;
}

export default function InnerPage() {
  return <h1></h1>
}
