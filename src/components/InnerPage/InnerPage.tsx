import { getDataById } from '../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardMedia, Modal, Typography } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';

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
        margin: '3rem auto 0',
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
          <CardMedia
            src={artifactData?.webImage?.url}
            component="img"
            sx={{ position: 'relative' }}
          />
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              padding: '0.8rem 1.5rem',
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
            }}
          >
            <OpenWithIcon sx={{marginRight: '0.5rem'}}/>
            VIEW IMAGE
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <CardMedia
                src={artifactData?.webImage?.url}
                component="img"
                sx={{ width: '50%' }}
              />
            </Box>
          </Modal>
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
      </Box>
    </Box>
  );
}
