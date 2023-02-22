import { ArtifactModel } from '../../models/Artifacts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function SingleImage(props: { data: ArtifactModel }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={props.data.webImage.url}
        alt={props.data.longTitle}
      />
      <Typography variant="h5" color={'whitesmoke'}>
        {props.data.title}
      </Typography>
      <Typography variant="h6" color={'whitesmoke'}>
        {props.data.principalOrFirstMaker}
      </Typography>
    </Card>
  );
}
