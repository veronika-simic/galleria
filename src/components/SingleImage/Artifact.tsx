import { ArtifactModel } from '../../types/Artifacts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ImageCaption from './ImageCaption';
import { Link } from 'react-router-dom';
import { Skeleton, useTheme } from '@mui/material';
import { getImageUrl } from '../../utils/getImage';
import CardMedia from '@mui/material/CardMedia';

export default function Artifact({
  data,
  loading,
}: {
  data: ArtifactModel;
  loading: boolean;
}) {
  const [onHover, setOnHover] = useState({ raised: false, shadow: 1 });
  const theme = useTheme();

  console.log(data);

  return (
    <>
      <Link to={`artifacts/` + data.id}>
        <Card
          onMouseOver={() => setOnHover({ raised: true, shadow: 10 })}
          onMouseLeave={() => setOnHover({ raised: false, shadow: 1 })}
          raised={onHover.raised}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image={getImageUrl(data.image_id, 600)}
              alt={data.title}
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
              <ImageCaption title={data.title} author={data.artist_title} />
            </Box>
          </Box>
        </Card>
      </Link>
    </>
  );
}
