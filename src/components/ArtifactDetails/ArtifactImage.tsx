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

function ArtifactImage({ ...artifactData }) {
  const theme = useTheme();
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
          <Typography style={theme.typography.h5}>
            {artifactData.title}
          </Typography>
        }
        subheader={
          <Typography style={theme.typography.h6}>
            {artifactData.artist_title}
          </Typography>
        }
      />
      <CardActions sx={{ padding: 0 }}>
        <CardMedia
          src={getImageUrl(artifactData.image_id, 600)}
          component="img"
        ></CardMedia>

        <ArtifactImageModal data={getImageUrl(artifactData.image_id, 600)} />
      </CardActions>
    </Card>
  );
}

export default ArtifactImage;
