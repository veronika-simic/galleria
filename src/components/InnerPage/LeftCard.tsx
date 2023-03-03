import { Card, CardHeader, CardMedia, Typography, useTheme } from '@mui/material';
import CardModal from './Modal';
import { CardActions } from '@mui/material';
export default function LeftCard(props: { data: any }) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        boxShadow: 'none',
        width: {xs: '80%', lg: '40%'},
      }}
    >
      <CardHeader
        title={
          <Typography gutterBottom style={theme.typography.h5}>
            {props.data.title}
          </Typography>
        }
        subheader={
          <Typography style={theme.typography.h6}>
            {props.data.principalMaker}
          </Typography>
        }
      />
      <CardActions sx={{position: 'relative', padding: 0}}>
        <CardModal data={props.data?.webImage?.url} />
        <CardMedia
          src={props.data?.webImage?.url}
          component="img"
          sx={{ objectFit: 'contain' }}
        ></CardMedia>
      </CardActions>
    </Card>
  );
}
