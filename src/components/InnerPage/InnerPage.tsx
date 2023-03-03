import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

export default function InnerPage() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState<any>([]);

  useEffect(() => {
    const getArtifactData = async () => {
      const response = await getDataById(artifactId);
      setArtifactData(response);
    };
    getArtifactData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2rem auto 0',
        position: 'relative',
        width: '95%',
      }}
    >
      <LeftCard data={artifactData} />
      <RightCard data={artifactData} />
    </Box>
  );
}
