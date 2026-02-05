import { Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  author: string;
}

export default function ArtifactCaption({ title, author }: Props) {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle2">{author}</Typography>
    </>
  );
}
