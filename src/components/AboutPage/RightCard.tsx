import {
  Card,
  Typography,
  CardContent,
  CardActions,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function RightCard(props: { data: any }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        alignItems: 'flex-start',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '2rem',
        width: { xs: '80%', lg: '40%' },
        position: 'relative',
        paddingTop: '12rem',
      }}
      elevation={0}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: '2rem',
          left: 0,
          fontSize: '12rem',
          color: '#B2B2B2',
          opacity: 0.2,
        }}
      >
        {props.data.dating?.sortingDate}
      </Typography>
      <CardContent sx={{ width: { xs: '100%', lg: '70%' } }}>
        <Typography style={theme.typography.h5}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: { xs: 'center', lg: 'inherit' } }}>
        <Link
          to={
            'https://www.rijksmuseum.nl/en/rijksstudio?ii=0&p=0&from=2023-02-28T08%3A49%3A26.6408842Z'
          }
          target="_blank"
          style={theme.typography.caption}
        >
          GO TO SOURCE
        </Link>
      </CardActions>
    </Card>
  );
}
