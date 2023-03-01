/* import { Box, Button, CardActions, CardMedia, Modal } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
export default function Modal() {
  return (
    <CardActions>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '0.8rem 1.5rem',
          opacity: '0.7',
          '&.MuiButtonBase-root:hover': {
            background: 'black',
          },
        }}
      >
        <OpenWithIcon sx={{ marginRight: '0.5rem' }} />
        VIEW IMAGE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ backgroundColor: 'black', opacity: 0.9, width: '100%' }}>
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
          <Button
            onClick={handleClose}
            sx={{
              color: 'white',
              fontSize: '1rem',
              opacity: 0.8,
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              '&.MuiButtonBase-root:hover': {
                background: 'black',
              },
            }}
          >
            CLOSE
          </Button>
        </Box>
      </Modal>
    </CardActions>
  );
} */
