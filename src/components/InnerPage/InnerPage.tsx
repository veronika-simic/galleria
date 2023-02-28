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
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem auto 0',
        width: '95%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: '50%',
        }}
      >
        <Card
          sx={{
            maxWidth: '70%',
          }}
        >
          <CardMedia src={artifactData?.webImage?.url} component="img" />
        </Card>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'white',
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            rowGap: '1rem',
            width: '40%',
            zIndex: 100,
          }}
        >
          <Typography variant="h3" fontFamily={'Noto Serif'} fontWeight={700}>
            {artifactData.title}
          </Typography>
          <Typography variant="h6" fontFamily={'Noto Serif'} color={'#B2B2B2'}>
            {artifactData.principalMaker}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '50%', textAlign: 'center' }}>
        <h1>{artifactData.dating?.sortingDate}</h1>
        <h1>description</h1>
      </Box>
    </Box>
  );
}
