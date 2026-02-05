import { Card, CardMedia, Modal } from '@mui/material';
import { useState } from 'react';
import CloseButtonCustomization from './CloseButton';
import OpenButtonCustomization from './OpenButton';

export default function CardModal(props: { data: any }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);
  return (
    <>
      <OpenButtonCustomization onClick={handleOpen} />
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
          <CloseButtonCustomization onClick={handleClose}/>
        </Card>
      </Modal>
    </>
  );
}
