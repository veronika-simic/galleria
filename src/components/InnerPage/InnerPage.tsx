import { useLoaderData } from 'react-router-dom';
import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';

export default function InnerPage() {
  const {artifactId} = useParams()
  return <h1>{artifactId}</h1>
}
