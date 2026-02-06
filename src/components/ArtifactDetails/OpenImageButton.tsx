import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';

const OpenButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  bottom: '3rem',
  left: '1rem',
  opacity: 0.85,
  padding: '0.7rem 1.4rem',
  position: 'absolute',
  color: theme.palette.secondary.light,
}));

export default function OpenImageButton({ onClick }: { onClick: () => void }) {
  return (
    <OpenButton onClick={onClick}>
      <OpenWithIcon sx={{ mr: '0.5rem' }} />
      VIEW IMAGE
    </OpenButton>
  );
}
