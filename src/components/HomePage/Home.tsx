import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
export default function HomePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getAllDataFromApi = async() => {
        const response = await getData();
        setData(response);
    }
    getAllDataFromApi()
  }, [setData]);

  return (
    <>
      <p>{data}</p>
    </>
  );
}
