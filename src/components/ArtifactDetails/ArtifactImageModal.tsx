import { Card, CardMedia, Modal } from '@mui/material';
import { useState } from 'react';
import CloseModalButton from './CloseModalButton';
import OpenImageButton from './OpenImageButton';

export default function ArtifactImageModal({ imageUrl }: { imageUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OpenImageButton onClick={() => setOpen(true)} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <Card
          sx={{
            backgroundColor: 'black',
            opacity: 0.95,
            width: '100%',
            height: '100vh',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            src={imageUrl}
            sx={{
              height: '100%',
              objectFit: 'contain',
            }}
          />
          <CloseModalButton onClick={() => setOpen(false)} />
        </Card>
      </Modal>
    </>
  );
}
