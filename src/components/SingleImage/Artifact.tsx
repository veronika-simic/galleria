import { ArtifactModel } from '../../models/Artifacts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ImageFile from './ImageFile';
import ImageCaption from './ImageCaption';
export default function Artifact(props: { data: ArtifactModel }) {
  const [onHover, setOnHover] = useState({ raised: false, shadow: 1 });

  return (
    <Card
      onMouseOver={() => setOnHover({ raised: true, shadow: 10 })}
      onMouseLeave={() => setOnHover({ raised: false, shadow: 1 })}
      raised={onHover.raised}
    >
      <Box sx={{ position: 'relative' }}>
        <ImageFile data={props.data} />
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            width: '80%',
            color: 'whitesmoke',
          }}
        >
          <Typography
            variant="h5"
            fontFamily={'Crimson Text'}
            fontWeight={'bold'}
            letterSpacing={1.5}
          >
           {/*  {props.data.title} */}
           <ImageCaption data={props.data}/>
          </Typography>
          <Typography variant="h6" fontFamily={'Crimson Text'}>
            {props.data.principalOrFirstMaker}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
