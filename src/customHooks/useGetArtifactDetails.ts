import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useGetArtifactDetails() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getArtifactData = async () => {
      try {
        const response = await getDataById(artifactId);
        setArtifactData(response);
        setLoading(false);
      } catch (e) {
        setError("Couldn't fetch the details");
      } finally {
        setLoading(false);
      }
    };
    getArtifactData();
  }, []);

  return {
    artifactData,
    loading,
    error,
  };
}
