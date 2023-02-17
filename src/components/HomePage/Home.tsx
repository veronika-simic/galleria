import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
export default function HomePage() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getAllDataFromApi = async () => {
      const response = await getData();
      setData(response);
    };
    getAllDataFromApi();
  }, []);

  return (
    <Box>
      <Masonry columns={4} spacing={2}>
        {data.map((data: string) => (
          <img key={data} src={data}/>
        ))}
      </Masonry>
    </Box>
  );
}
