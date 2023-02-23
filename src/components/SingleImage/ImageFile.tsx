import CardMedia from '@mui/material/CardMedia';
import { ArtifactModel } from '../../models/Artifacts';

export default function ImageFile(props: { data: ArtifactModel }) {
  return (
    <CardMedia
      component="img"
      image={props.data.webImage.url}
      alt={props.data.longTitle}
    />
  );
}
