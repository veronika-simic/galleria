import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  useTheme,
  Box,
} from '@mui/material';
import ArtifactImageModal from './ArtifactImageModal';
import { getImageUrl } from '../../utils/getImage';
import { ArtifactInterface } from '../../types/Artifacts';

function ArtifactImage({ artifact }: { artifact: ArtifactInterface }) {
  const theme = useTheme();
  const imageUrl = getImageUrl(artifact.image_id, 600);

  return (
    <Card
      sx={{
        boxShadow: 'none',
        width: { xs: '90%', lg: '40%' },
      }}
      elevation={0}
    >
      <CardHeader
        title={
          <Typography style={theme.typography.h5}>{artifact.title}</Typography>
        }
        subheader={
          <Typography style={theme.typography.h6}>
            {artifact.artist_title}
          </Typography>
        }
      />

      <CardActions
        sx={{
          padding: 0,
          height: '70vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          src={imageUrl}
          alt={artifact.title}
          sx={{
            maxHeight: '90%',
            objectFit: 'contain',
          }}
        />

        <ArtifactImageModal imageUrl={imageUrl} />
      </CardActions>
    </Card>
  );
}

export default ArtifactImage;
