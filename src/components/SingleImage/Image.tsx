import { ArtifactModel } from '../../models/Artifacts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SingleImage(props: { data: ArtifactModel }) {
  return (
    <Card>
      <Box sx={{ position: 'relative'}}>
        <CardMedia
          component="img"
          image={props.data.webImage.url}
          alt={props.data.longTitle}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            width: '80%',
            color: 'whitesmoke',
          }}
        >
          <Typography variant="h4" fontFamily={'Crimson Text'} fontWeight={'bold'} letterSpacing={1.5}>
            {props.data.title}
          </Typography>
          <Typography variant="h6" fontFamily={'Crimson Text'}>
            {props.data.principalOrFirstMaker}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
