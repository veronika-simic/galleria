import { Box } from '@mui/material';
import ImageContainer from './ImageContainer';
import RightCard from './RightCard';
import { useGetArtifactDetails } from '../../customHooks/useGetArtifactDetails';

export default function InnerPage() {
  const { artifactData } = useGetArtifactDetails();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        rowGap: '1.5rem',
      }}
    >
      <ImageContainer {...artifactData} />
      <RightCard {...artifactData} />
    </Box>
  );
}
