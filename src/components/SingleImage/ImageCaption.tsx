import Typography from '@mui/material/Typography';

export default function ImageCaption(props: {
  title: string;
  author: string;
}) {
  return (
    <>
      <Typography
        variant="h5"
        fontFamily={'Crimson Text'}
        fontWeight={'bold'}
        letterSpacing={1.5}
      >
        {props.title}
      </Typography>
      <Typography variant="h6" fontFamily={'Crimson Text'}>
        {props.author}
      </Typography>
    </>
  );
}
