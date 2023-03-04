import { Card, Button, CardMedia, Modal } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { useState } from 'react';
export default function CardModal(props: { data: any }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: 'black',
          bottom: '0.5rem',
          color: 'white',
          left: '0.8rem',
          padding: '0.75rem',
          opacity: '0.7',
          '&.MuiButtonBase-root:hover': {
            background: 'black',
          },
          position: 'absolute',
        }}
      >
        <OpenWithIcon sx={{height: '1.5rem', marginRight: '0.5rem' }} />
        VIEW IMAGE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ backgroundColor: 'black', opacity: 0.9, width: '100%' }}>
          <CardMedia
            src={props.data}
            component="img"
            sx={{
              height: '100vh',
              objectFit: 'contain',
            }}
          />
          <Button
            onClick={handleClose}
            sx={{
              color: 'white',
              fontSize: '1rem',
              opacity: 0.8,
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              '&.MuiButtonBase-root:hover': {
                background: 'black',
              },
            }}
          >
            CLOSE
          </Button>
        </Card>
      </Modal>
    </>
  );
}
