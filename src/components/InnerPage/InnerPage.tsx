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
          border: '1px solid red',
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

      <Box sx={{ width: '50%', textAlign: 'center', border: '1px solid red', position: 'relative' }}>
        <Typography
          variant="subtitle2"
          fontSize={'14rem'}
          fontFamily={'Noto Serif'}
          color={'#EEEEEE'}
          zIndex={-10}
          position="absolute"
          right={'5rem'}
        >
          {artifactData.dating?.sortingDate}
        </Typography>
        <Typography>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </Typography>
      </Box>
    </Box>
  );
}
