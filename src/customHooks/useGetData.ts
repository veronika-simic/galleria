import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
import { ArtifactInterface } from '../types/Artifacts';

export function useGetData() {
  const [artifacts, setArtifacts] = useState<ArtifactInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllDataFromApi = async () => {
      try {
        const response = await getData();
        setArtifacts(response);
        setLoading(false);
      } catch (e) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getAllDataFromApi();
  }, []);

  return {
    artifacts,
    loading,
    error,
  };
}
