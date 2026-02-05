import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';

export const OpenImageButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  bottom: '1rem',
  color: theme.palette.secondary.light,
  left: '1rem',
  opacity: '0.7',
  padding: '0.8rem 1.5rem',
  position: 'absolute',
  '&.MuiButtonBase-root:hover': {
    background: theme.palette.primary.dark,
  },
}));

export default function OpenButtonCustomization(props: {
  onClick: () => void;
}) {
  return (
    <OpenImageButton onClick={props.onClick}>
      <OpenWithIcon sx={{ height: '1.5rem', marginRight: '0.5rem' }} />
      VIEW IMAGE
    </OpenImageButton>
  );
}
