import { ArtifactModel } from '../../models/Artifacts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function SingleImage(props: { data: ArtifactModel }) {
  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={props.data.webImage.url}
          alt={props.data.longTitle}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: '100%',
            color: 'white',
          }}
        >
          <Typography variant="h5" fontFamily={'Crimson Text'} color={'whitesmoke'}>
            {props.data.title}
          </Typography>
          <Typography variant="h6" color={'whitesmoke'}>
            {props.data.principalOrFirstMaker}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
