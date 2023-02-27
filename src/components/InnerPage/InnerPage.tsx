import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function InnerPage() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState<any>();
  useEffect(() => {
    const getArtifactData = async () => {
      const response = await getDataById(artifactId);
      setArtifactData(response);
    };
    getArtifactData();
  },[]);
  return (
    <>
      <h2>{artifactId}</h2>
      <h2>{artifactData.elapsedMilliseconds}</h2>
    </>
  );
}
