import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
} from '@mui/material';
import CardModal from './Modal';
export default function LeftCard(props: { data: any }) {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        width: '40%',
      }}
    >
      <CardHeader
        title={
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
        }
        subheader={
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.principalMaker}
          </Typography>
        }
      />
     
      <CardMedia
        src={props.data?.webImage?.url}
        component="img"
        sx={{ objectFit: 'contain' }}
      ></CardMedia>
      <CardModal data={props.data?.webImage?.url} />
    </Card>
  );
}
