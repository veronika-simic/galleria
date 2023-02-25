import { ArtifactModel } from '../../models/Artifacts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ImageFile from './ImageFile';
import ImageCaption from './ImageCaption';
import { Link } from 'react-router-dom';
export default function Artifact(props: { data: ArtifactModel }) {
  const [onHover, setOnHover] = useState({ raised: false, shadow: 1 });

  return (
    <Link to={`artifact/` + props.data.objectNumber}>
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
            <ImageCaption
              title={props.data.title}
              author={props.data.principalOrFirstMaker}
            />
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
