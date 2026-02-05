import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ImageCaption from './ImageCaption';
import { Link } from 'react-router-dom';
import { Skeleton, useTheme } from '@mui/material';
import { getImageUrl } from '../../utils/getImage';
import CardMedia from '@mui/material/CardMedia';
import { ArtifactProps } from '../../types/Artifacts';

export default function Artifact({ artifact, loading }: ArtifactProps) {
  const [raised, setRaised] = useState(false);
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" color={theme.palette.secondary.main}>
          <CardMedia
            component="img"
            image={getImageUrl(artifact.image_id, 600)}
          />
        </Skeleton>
      ) : (
        <Link to={`artifacts/` + artifact.id}>
          <Card
            onMouseOver={() => setRaised(true)}
            onMouseLeave={() => setRaised(false)}
            raised={raised}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                image={getImageUrl(artifact.image_id, 600)}
                alt={artifact.title}
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
                <ImageCaption
                  title={artifact.title}
                  author={artifact.artist_title}
                />
              </Box>
            </Box>
          </Card>
        </Link>
      )}
    </>
  );
}
