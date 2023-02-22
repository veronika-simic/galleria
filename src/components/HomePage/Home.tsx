import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function HomePage() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllDataFromApi = async () => {
      const response = await getData();
      setData(response);
      setLoading(false);
    };
    getAllDataFromApi();
  }, []);

  return (
    <Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 4 }} spacing={{ xs: 2 }}>
        {loading ? (
          <Skeleton />
        ) : (
          data.map((data: string) => <img key={data} src={data} />)
        )}
      </Masonry>
    </Box>
  );
}
