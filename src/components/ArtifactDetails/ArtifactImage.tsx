import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  useTheme,
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
        width: { xs: '80%', lg: '40%' },
        position: 'relative',
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
      <CardActions sx={{ padding: 0 }}>
        <CardMedia component="img" src={imageUrl} alt={artifact.title} />
        <ArtifactImageModal imageUrl={imageUrl} />
      </CardActions>
    </Card>
  );
}

export default ArtifactImage;
