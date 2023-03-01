import { getDataById } from '../api/axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function InnerPage() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        height: '80vh',
        margin: '3rem auto 0',
        width: '95%',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          border: 'none',
          boxShadow: 'none',
          position: 'relative',
          width: '50%',
        }}
      >
        <CardMedia
          src={artifactData?.webImage?.url}
          component="img"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            height: '25%',
            position: 'absolute',
            right: 0,
            rowGap: '1rem'
          }}
        >
          <Typography variant="h4" fontFamily={'Noto Serif'} fontWeight={600}>
            {artifactData.title}
          </Typography>
          <Typography variant="h6" fontFamily={'Noto Serif'} color={'#B2B2B2'}>
            {artifactData.principalMaker}
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: '50%',
          textAlign: 'left',
          position: 'relative',
        }}
      >
        <Typography
          variant="subtitle2"
          fontSize={'14rem'}
          fontFamily={'Noto Serif'}
          color={'#EEEEEE'}
          zIndex={-10}
          position="absolute"
          right={'10rem'}
        >
          {artifactData.dating?.sortingDate}
        </Typography>
        <Typography
          fontFamily={'Noto Serif'}
          color={'#7F8487'}
          width={'45%'}
          margin="auto"
          position="absolute"
          top={'15rem'}
          left={0}
          right={0}
        >
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
        <Link
          to={
            'https://www.rijksmuseum.nl/en/rijksstudio?ii=0&p=0&from=2023-02-28T08%3A49%3A26.6408842Z'
          }
          target="_blank"
          style={{
            position: 'absolute',
            bottom: '8rem',
            left: 0,
            right: 0,
            margin: 'auto',
            width: '45%',
            color: '#B2B2B2',
          }}
        >
          GO TO SOURCE
        </Link>
      </Box>
    </Box>
  );
}
