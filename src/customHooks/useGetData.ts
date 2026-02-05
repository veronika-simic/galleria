import { useState, useEffect } from 'react';
import { getData } from '../api/axios';

export function useGetData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllDataFromApi = async () => {
      try {
        const response = await getData();
        setData(response);
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
    data,
    loading,
    error,
  };
}
