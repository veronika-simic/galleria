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
      <Masonry
        columns={{ xs: 1, sm: 1, md: 2, lg: 4}}
        spacing={{ xs: 2 }}
      >
        {data.map((data: string) => (
          <img key={data} src={data} />
        ))}
      </Masonry>
    </Box>
  );
}
