import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useGetArtifactDetails() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState([]);

  useEffect(() => {
    const getArtifactData = async () => {
      const response = await getDataById(artifactId);
      setArtifactData(response);
    };
    getArtifactData();
  }, []);

  return {
    artifactData,
  };
}
