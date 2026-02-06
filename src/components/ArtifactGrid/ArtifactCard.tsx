import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ArtifactCaption from './ArtifactCaption';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { getImageUrl } from '../../utils/getImage';
import CardMedia from '@mui/material/CardMedia';
import { ArtifactInterface } from '../../types/Artifacts';

export default function ArtifactCard({
  artifact,
}: {
  artifact: ArtifactInterface;
}) {
  const [raised, setRaised] = useState(false);
  const theme = useTheme();

  return (
    <Link to={`/artifacts/${artifact.id}`}>
      <Card
        onMouseEnter={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
        raised={raised}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={getImageUrl(artifact.image_id, 600)}
            alt={artifact.title}
            loading="lazy"
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '80%',
              color: theme.palette.secondary.light,
            }}
          >
            <ArtifactCaption
              title={artifact.title}
              author={artifact.artist_title}
            />
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
