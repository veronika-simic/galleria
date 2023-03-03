import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function ImageCaption(props: { title: string; author: string }) {
  const theme = useTheme();
  return (
    <>
      <Typography
        style={theme.typography.h5}
      >
        {props.title}
      </Typography>
      <Typography style={theme.typography.h6}>{props.author}</Typography>
    </>
  );
}
