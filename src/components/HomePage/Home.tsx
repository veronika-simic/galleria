import Masonry from '@mui/lab/Masonry';
import { useState, useEffect } from 'react';
import { getData } from '../api/axios';
import Artifact from '../SingleImage/Artifact';
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
    <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>
      {data.map((data: ArtifactModel) => (
        <Artifact key={data.objectNumber} data={data} loading={loading} />
      ))}
    </Masonry>
  );
}
