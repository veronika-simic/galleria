import { getDataById } from '../api/axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  Card,
  CardMedia,
  Modal,
  Typography,
  useTheme,
} from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { CloseButton } from './CloseButton';
import { OpenButton } from './OpenButton';

export default function InnerPage() {
  const { artifactId } = useParams();
  const theme = useTheme();
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
            display: 'flex',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <CardMedia
            src={artifactData?.webImage?.url}
            component="img"
            sx={{ position: 'relative', objectFit: 'contain' }}
          />
          <OpenButton onClick={handleOpen}>
            <OpenWithIcon sx={{ marginRight: '0.5rem' }} />
            VIEW IMAGE
          </OpenButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.dark,
                width: '100%',
              }}
            >
              <CardMedia
                src={artifactData?.webImage?.url}
                component="img"
                sx={{
                  height: '100vh',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  margin: 'auto',
                  objectFit: 'contain',
                  zIndex: 100,
                }}
              />
              <CloseButton onClick={handleClose}>CLOSE</CloseButton>
            </Box>
          </Modal>
        </Card>
        <Box
          sx={{
            alignItems: 'left',
            backgroundColor: 'white',
            color: theme.palette.primary.main,
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '1rem',
            position: 'absolute',
            right: 0,
            rowGap: '1rem',
            width: '40%',
            zIndex: 100,
          }}
        >
          <Typography style={theme.typography.h3}>
            {artifactData.title}
          </Typography>
          <Typography style={theme.typography.h4}>
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
          style={theme.typography.subtitle1}
          zIndex={-10}
          position="absolute"
          right={'10rem'}
        >
          {artifactData.dating?.sortingDate}
        </Typography>
        <Typography
          style={theme.typography.caption}
          width={'60%'}
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
            color: theme.palette.primary.light,
          }}
        >
          GO TO SOURCE
        </Link>
      </Box>
    </Box>
  );
}
