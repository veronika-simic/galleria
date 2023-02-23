import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
import SingleImage from '../SingleImage/Image';
import { ArtifactModel } from '../../models/Artifacts';
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
    <Box sx={{ overflowY: 'hidden', margin: '2rem auto 0', width: '95%' }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 4 }} spacing={{ xs: 2 }}>
        {data.map((data: ArtifactModel) => (
          <SingleImage key={data.objectNumber} data={data} />
        ))}
      </Masonry>
    </Box>
  );
}
