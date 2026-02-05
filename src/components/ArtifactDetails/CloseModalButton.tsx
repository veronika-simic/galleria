import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CloseButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1rem',
  position: 'absolute',
  top: '1rem',
  right: '2rem',
  background: theme.palette.primary.dark,
}));

export default function CloseModalButton({ onClick }: { onClick: () => void }) {
  return <CloseButton onClick={onClick}>CLOSE</CloseButton>;
}
