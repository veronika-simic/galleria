import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Card, CardMedia, Typography } from '@mui/material';

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
      sx={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}
    >
      <Box sx={{ width: '50%', border: '1px solid red', display: 'flex' }}>
        <Card
          sx={{
            maxWidth: '70%',
          }}
        >
          <CardMedia src={artifactData?.webImage?.url} component="img" />
        </Card>
        <Box>
          <Typography>{artifactData.title}</Typography>
          <Typography>{artifactData.principalMaker}</Typography>
        </Box>
      </Box>

      <Box sx={{ width: '50%', border: '1px solid red' }}>
        <h1>description</h1>
      </Box>
    </Box>
  );
}
