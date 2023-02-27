import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArtifactData } from '../../models/ArtifactData';

export default function InnerPage() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState<any>([]);
  useEffect(() => {
    const getArtifactData = async () => {
      const response = await getDataById(artifactId);
      setArtifactData(response);
    };
    getArtifactData();
  }, []);
  return <>
    <h1>{artifactData.id}</h1>
  </>;
}
